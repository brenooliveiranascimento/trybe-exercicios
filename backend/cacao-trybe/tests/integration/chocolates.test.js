const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

chai.use(chaiHttp);
const { expect } = chai;
const app = require('../../src/app');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('Testando a API Cacao Trybe', function () {

  describe('Testando API cocoa Trybe', function() {
    sinon.stub(fs.promises, 'readFile')
    .resolves(mockFile);
  
    describe('Usando o método GET em /chocolates', function () {
      it('Retorna a lista completa de chocolates', async function () {
        const output = [
          { id: 1, name: 'Mint Intense', brandId: 1 },
          { id: 2, name: 'White Coconut', brandId: 1 },
          { id: 3, name: 'Mon Chéri', brandId: 2 },
          { id: 4, name: 'Mounds', brandId: 3 },
        ];
    
        response = await chai
          .request(app)
          .get('/chocolates');
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.be.deep.equal(output);
      })
    })
  })
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });
  
  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');
  
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal([
          {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
          },
          {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
          },
        ])
    });
  });
  
  // src/tests/integration/chocolates.test.js
  // ... outros testes ...

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai.request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});
// });
})

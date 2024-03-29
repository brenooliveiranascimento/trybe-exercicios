const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

const editPeople = {
  personEdited: {
    firstName: 'Lukão',
    lastName: 'Andarilho dos ceus',
    email: 'lukão.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  message: 'Pessoa alterada com sucesso!!'
}

describe('Testando os endpoint de people', function() {
  it('Testando o cadastro de uma pessoa', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/people')
      .send({
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        phone: '851 678 4453',
      })

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ message: 'Pessoa cadastrado com sucesso!' });
  })

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testa a procura de uma pessoa com base no id', async function() {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);

    const response = await chai
      .request(app)
      .get('/people/:1')
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(peopleList[0]);
  })

  it('Testando a alteração de uma pessoa com base no id', async function() {
    sinon.stub(connection, 'execute').resolves([{ affectedRows:1 }]);

    const response = await chai
      .request(app)
      .put('/people/:1')
      .send({
          firstName: 'Lukão',
          lastName: 'Andarilho dos ceus',
          email: 'lukão.skywalker@trybe.com',
          phone: '851 678 4453',
      })

      expect(response.status).to.be.equal(200)
      expect(response.body).to.deep.equal(editPeople)
  })

  afterEach(sinon.restore);
})

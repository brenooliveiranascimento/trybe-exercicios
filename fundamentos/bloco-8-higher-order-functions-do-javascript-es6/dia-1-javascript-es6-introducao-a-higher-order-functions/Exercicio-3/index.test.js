const {resultado, verifyAnswers} = require('./index')

describe('Verificando se a função resultado que conta as notas', () => {
  it('Check when the student gets all the questions right', () => {
    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    expect(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers)).toBe(`A sua nota foi de 10 pontos`)
  });
  it('Checking when student does not answers all questions', () =>{
    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A'];
     expect(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers)).toBe("A sua prova está incompleta! Por favor termine de responde-la");
  })
})
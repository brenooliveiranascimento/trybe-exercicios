const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'D', 'A', 'D', 'B'];

const verifyAnswers = (right, student) => {
  if(right === student) {
    return 1;
  }if(student === 'N.A') {
    return 0;
  };
  return -0.5;
}

const resultado = (right, student, action) => {
  let points = 0;
  if(right.length > student.length) {
    return "A sua prova está incompleta! Por favor termine de responde-la"
  }
  for(let index in right) {
    const actionReturn = action(right[index], student[index]);
    points += actionReturn;
  }
  return `A sua nota foi de ${points} ${points > 1 ? 'pontos' : 'ponto'}`
}

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS,verifyAnswers));

module.exports = {resultado, verifyAnswers};

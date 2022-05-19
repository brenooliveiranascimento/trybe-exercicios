// 1 Primeiro pass é percorrer o arrau de grades e retornar a media para cada array.
//2 depois assimilar o resultado com cada aluno na ordem correta

//MEU RESULTADO!
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const getMedia = (acc, curr) => (acc + curr);

function studentAverage() {
  const media = grades.map(value => value.reduce(getMedia) / value.length);
  return students.map((value, index) => {
    return {
      name:value,
      avarge:media[index]
    }
  });
};


//RESULTADO DO GABARITO!!
function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
  }));
  return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];



const multiply = (number = 1, value = 1) => number * value

console.log(multiply(8));
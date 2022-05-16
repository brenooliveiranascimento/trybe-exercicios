
// FOR EACH
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
// FOR EACH


// FIND
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find(number => number % 3 === 0 && number % 5 === 0)

console.log(findDivisibleBy3And5())


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find(value => value.length === 5 )

console.log(findNameWithFiveLetters());


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
return musicas.find(() => id === '31031685') 
}

console.log(findMusic('31031685'))
// FIND


//SOME AND EVERY
const names2 = ['Mateus', 'José', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(value => value === name)
}

console.log(hasName(names2, 'Ana'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every(value => value.age >= minimumAge)
}

console.log(verifyAges(people, 18));

//SOME AND EVERY

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

people2.sort((a,b) => a.age - b.age)
console.log(people2);
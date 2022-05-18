const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//EXERCICIO 2
function reduceNames() {
  return books.reduce((acc, curr) => {
    return `${acc} ${curr.author.name}`
  }, books[0].author.name)
}
console.log(reduceNames())


//EXERCICIO 3
//1 primeiro precisso percorrer o array e alcular a idade de cada autor subitraindo a data de lançamento do livro e a data de nascimento.
//2 segundo passo é dividir é somar todas as idade.
//3 terceiro passo é dividir a idade de todos somados pela quanidade de autores elementos do array.

const getAuthorAge = (value) => {return value.releaseYear - value.author.birthYear}
const someAllAge = (acc, curr) => acc + curr;

function averageAge() {
  const allYear = books.map(getAuthorAge)
  const mediaOfYer = allYear.reduce(someAllAge) / books.length;
  return mediaOfYer
}
console.log(averageAge())


//EXERCICIO 4
function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if(acc.name.length > curr.name.length) return acc;
    return curr
  })
}
console.log(longestNamedBook());


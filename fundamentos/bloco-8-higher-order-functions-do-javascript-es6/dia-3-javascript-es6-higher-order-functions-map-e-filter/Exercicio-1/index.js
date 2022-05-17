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
//1
function formatedBookNames() {
  return books.map(value => [`${value.name} - ${value.genre} - ${value.author.name}`])
}
console.log(formatedBookNames())


//2
function nameAndAge() {
  return books.map(value => (
    {age:value.releaseYear - value.author.birthYear, author:value.author.name}
  )).sort((valueA, valueB) => valueA.age - valueB.age)
}
console.log(nameAndAge())


//3
function fantasyOrScienceFiction() {
  return books.filter(value => value.genre === 'Fantasia' || value.genre === 'Ficção Científica')
}
console.log(fantasyOrScienceFiction());


//4
function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  return books.filter(value => value.releaseYear < currentYear - 60).sort((v1, v2) => v1.releaseYear - v2.releaseYear);
}
console.log(oldBooksOrdered())


//5
function fantasyOrScienceFictionAuthors() {
  const arrayFiltrada = books.filter(value => value.genre === 'Fantasia' || value.genre === 'Ficção Científica');
  return arrayFiltrada.map(value => `${value.author.name}`).sort()
}
console.log(fantasyOrScienceFictionAuthors());


//6
function oldBooks() {
  const currentYear = new Date().getFullYear();
  const arrayFiltrada = books.filter(value => value.releaseYear < currentYear - 60);
  return arrayFiltrada.map(value => `${value.name}`)
}
console.log(oldBooks());

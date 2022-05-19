//Primeiro passo é transformar todas as palavras em um unico array.
//Segundo passo é percorrer toda a string gigante e verificar a quantidade de vezes que a letra a repetiu.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const aCount = (acc, curr) => {
  if(curr === 'A' || curr === 'a') {
    acc += 1
  }
  return acc
}

function containsA() {
  const gigantString = names.join('');
  const subString = gigantString.split('');
  return subString.reduce(aCount, 0)
}

console.log(containsA())  

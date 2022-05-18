// const numbers = [50, 85, -30, 3, 15];


const caçarMaiorNumero = (array) => {
  let maiorNumero = 0;
  for (let value of array) {
    value > maiorNumero ? maiorNumero = value : undefined;
  }
  return maiorNumero
};
console.log(caçarMaiorNumero(numbers))



const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPares = ((value) => value % 2 === 0);
const sumAllNumber = ((acumulador, number) => acumulador + number);

const getSum = (array) => array.filter(getPares).reduce(sumAllNumber)
console.log(getSum(numbers))
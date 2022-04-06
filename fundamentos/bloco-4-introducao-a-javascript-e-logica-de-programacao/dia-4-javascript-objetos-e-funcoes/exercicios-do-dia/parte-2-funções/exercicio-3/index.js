const numbers = [2, 4, 6, 7, 10, 0, -3];
var menorNumero = 999999999;

function printMinNumber(value){
  for( let retorno in value ){
    if( value[retorno] < menorNumero ){
      menorNumero = retorno
    }
  }
  console.log(menorNumero)
}

printMinNumber(numbers)
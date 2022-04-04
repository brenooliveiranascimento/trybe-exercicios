//1 - Declarar uma variavel com o valor 50
//2 - percorrer o valor 50
//3 - verificar se o numero retornado é um numero primo
//4 - se for um numero primo atribuir a uma variavel
//5 - verificar se o próximo número primo é maior do que o número primo atual!

var number = 50;
var maiorNumeroPrimo = 1

for( let i = 0 ; i <= number ; i += 1 ){
  if( i % 2 > 0 ){
    if( i > maiorNumeroPrimo ){
      maiorNumeroPrimo = i
    }
  }
}
console.log(maiorNumeroPrimo)
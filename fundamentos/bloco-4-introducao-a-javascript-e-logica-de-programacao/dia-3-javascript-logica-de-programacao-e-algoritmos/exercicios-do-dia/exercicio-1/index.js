//1 - Declarar uma variavel com o numero desejado
//2 - Declarar uma variavel para receber o fatorial
//3 - Percorrer o número apartir o 1
//4 - Multiplicar todos os numeros retornados pelo loop pelo próximo númeo

const num = 4;
var fatorial = 1;

for( let i = 1 ; i <= num ; i += 1 ){
  fatorial *= i
}
console.log(fatorial) 

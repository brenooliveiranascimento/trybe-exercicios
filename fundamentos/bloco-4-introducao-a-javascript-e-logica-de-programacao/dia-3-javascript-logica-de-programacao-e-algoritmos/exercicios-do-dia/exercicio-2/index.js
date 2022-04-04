//1 - Criar uma variavel para receber a palavra invertida
//2 - Percorrer um array de trás pra frente
//3 - Construir a palavra invertida dentro da variavel de destino

let word = 'Breno';
let reverseWord = "";
for( let i = word.length -1; i >= 0 ; i -= 1 ){
  reverseWord += word[i]
}
console.log(reverseWord)
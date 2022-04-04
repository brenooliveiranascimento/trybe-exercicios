//1 - Percorrer o array
//2 - Verificar o tamano de cada palavra
//3 - Compara o tamanho das demais palavras

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ""

for( let i = 0 ; i < array.length ; i +=1 ){
  if(array[i].length > maiorPalavra.length){
    maiorPalavra = array[i]
  }
}
console.log(maiorPalavra)
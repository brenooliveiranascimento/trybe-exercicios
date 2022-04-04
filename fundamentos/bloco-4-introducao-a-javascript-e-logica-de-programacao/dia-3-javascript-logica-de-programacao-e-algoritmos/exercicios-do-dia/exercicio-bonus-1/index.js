//1 - Declarar um valor n que seja maior que 1
//2 - imprimir um quadrado com a altura e largura ihual a n feita de asteriscos(*)

const n = 5
var tamanho = ""
for( let i = 1 ; i <= 5 ; i += 1 ){
  for( let j = 1 ; j <= n ; j +=1  ){
    tamanho += "*"
    if(tamanho.length === n){
      console.log(tamanho)
      tamanho = ""
    }
  }
}
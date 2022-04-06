//1 - percorrer o array
//2 - verificar qual é o maior valor
//3 - printar o indice deste valor

var numbers = [2, 3, 6, 7, 10, 1];
var higestIndice = 0

function maiorIndice(){
  for( let indice in numbers ){
    if( numbers[indice] > higestIndice  ){
      higestIndice = indice
    }
  }
  console.log(higestIndice)
}

maiorIndice()
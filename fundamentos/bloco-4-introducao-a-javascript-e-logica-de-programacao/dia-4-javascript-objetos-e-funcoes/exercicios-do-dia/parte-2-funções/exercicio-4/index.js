var names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
var maiorNome = "";

function printMaiorNome(valores){
  for( let indice of valores ){
    if( indice.length > maiorNome.length ){
      maiorNome = indice
    }
  }
  console.log(maiorNome)
}

printMaiorNome(names)
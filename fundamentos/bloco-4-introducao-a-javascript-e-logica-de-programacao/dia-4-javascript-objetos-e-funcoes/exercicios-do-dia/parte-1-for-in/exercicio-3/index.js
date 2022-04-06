let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente:'sim'
};

function forIn(charter){
  for( let keys in charter ){
    console.log(keys)
  }
}

forIn(info)
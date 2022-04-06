let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente:'sim'
};

function forIn(charter){
  for( let value in charter ){
    console.log(charter[value])
  }
}

forIn(info)
let Patinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'último MacPatinhas',
  recorrente:'sim'
};

let Margarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente:'sim'
};

function print(charter1, charter2){
  for( let value in charter1 ){
    console.log(charter2[value] + " e " + charter1[value])
  }
}

print(Patinhas, Margarida)
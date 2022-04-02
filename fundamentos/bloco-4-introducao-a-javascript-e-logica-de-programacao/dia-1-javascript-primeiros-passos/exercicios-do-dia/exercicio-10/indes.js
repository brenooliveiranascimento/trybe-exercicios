const producao = 30;
const venda = 65;
const lucroPorMil = (venda - producao * 0.2) * 1000;
if( lucroPorMil <= 0  ){
  console.log("Este preço gera prejuizo!!!")
}else{
  console.log(lucroPorMil)
}
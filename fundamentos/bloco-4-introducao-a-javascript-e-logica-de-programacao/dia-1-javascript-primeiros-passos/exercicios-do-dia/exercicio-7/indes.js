const porcentagem = 98;

if(porcentagem > 100 || porcentagem < 0){
  console.error("A nota deve ser menor que 100 e maior que 0")
}else if( porcentagem >=90 ){
  console.log("A")
}else if( porcentagem >= 80 ){
  console.log("B")
}else if( porcentagem >= 70 ){
  console.log("C")
}else if( porcentagem >= 60 ){
  console.log("D")
}else if( porcentagem >= 50 ){
  console.log("E")
}else if( porcentagem < 50 ){
  console.log("f")
}
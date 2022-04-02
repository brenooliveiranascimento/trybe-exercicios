var salarioBruto = 4200;
let inss;
let ir;

if( salarioBruto <= 1556.94 ){
  inss = salarioBruto * 0.08;
}else if( salarioBruto <= 2594.93 ){
  inss = salarioBruto * 0.09;
}else if( salarioBruto <= 5189.82 ){
  inss = salarioBruto * 0.11;
}else if( salarioBruto > 5189.82 ){
  inss = 570.88
}

salarioBase = salarioBruto - inss

if( salarioBase <= 1903.98 ){
  ir = 0
}else if( salarioBase <= 2826.65 ){
  ir = salarioBase * 0.075 - 142.80
}else if( salarioBruto <= 3752.05 ){
  ir = salarioBruto * 0.15 - 354.80
}else if( salarioBruto <= 4664.68 ){
  ir = salarioBruto * 0.225 - 636.13
}else if( salarioBruto > 4664.68 ){
  ir = salarioBruto * 0.275 - 869.36
}

let salarioLiquido = salarioBruto -( ir + inss )

console.log(salarioLiquido)
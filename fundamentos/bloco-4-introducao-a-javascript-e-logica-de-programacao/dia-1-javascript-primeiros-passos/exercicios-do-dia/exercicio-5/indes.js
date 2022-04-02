const anguloA = 45;
const anguloB = 45;
const anguloC = 90;

const soma = anguloA + anguloB + anguloC;

if( anguloA < 0 || anguloA > 180 ||
    anguloB < 0 || anguloB > 180 ||
    anguloC < 0 || anguloC > 180 ){
      console.log("todos os angulos devem ser menor que 180 e maor que 0")
    }else if( soma === 180 ){
      console.log("este é um triangulo")
    }else{
      console.log("sete não é um triangulo")
    }


const Breno = 81;

if( Breno >= 80 ){
  console.log("Você foi aprovado!")
}
else if( Breno >= 60 ){
  console.log("voce esta na lista de espera")
}else if( Breno < 60 ){
  console.log("Voê foi reprovado")
}

var estado = "aprovada";

switch(estado){
  case "aprovada":
    console.log("Você foi aprovado");
    break;
  case "lista":
    console.log("Voê está na lista de espera");
    break;
  case "reprovada":
    console.log("Voê foireprovado")
    break;
  default:
    console.log("Aguardando resultado")
}

const a = 20;
const b = 80

console.log(a + b);


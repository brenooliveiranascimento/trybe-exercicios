document.getElementsByTagName("p")[0].innerText = "Me vejo trabalhando como desenvolvidor a caminho de sair do Brasil"
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScripito"
let pValue = document.getElementsByTagName("p");

for ( let i = 0; i < pValue.length; i += 1 ) {
  let nowTexto = pValue[i].innerText;
  let maiusculo = nowTexto.toUpperCase();
  pValue[i].innerText = maiusculo
}
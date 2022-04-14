const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", addClass);
secondLi.addEventListener("click", addClass);
thirdLi.addEventListener("click", addClass);
input.addEventListener("keypress", AlterarValue);
myWebpage.addEventListener("dblclick", openPortifolio)
myWebpage.addEventListener("mouseover", hoverMOuse)
myWebpage.addEventListener("mouseleave", downMOuse)


function addClass(item){
  input.value = ""
  switch (item.target.id) {
    case "first-li":
      secondLi.className = "";
      thirdLi.className = "";
      firstLi.className = "tech"
      input.value = input.innerText = item.target.innerText
      console.log("dnawuodhoiuwafd")
    break;

    case "second-li":
      firstLi.className = "";
      thirdLi.className = "";
      input.value = input.innerText = item.target.innerText
      secondLi.className = "tech"
      break;

      case "third-li":
        firstLi.className = "";
        input.value = input.innerText = item.target.innerText
        secondLi.className = "";
        thirdLi.className = "tech"
  }
  // if( item.target.id == "first-li" ) {
  //   if( secondLi.className || thirdLi.className ) {
  //     secondLi.className = "";
  //     thirdLi.className = "";
  //   }
  //   firstLi.className = "tech"
  // }
  // if( item.target.id == "second-li" ) {
  //   if( firstLi.className || thirdLi.classList ) {
      // firstLi.classList = "";
      // thirdLi.classList = "";
  //   }
  //   secondLi.classList = "tech"
  //   input.innerText = ""
  // }
  // if( item.target.id == "third-li" ) {
  //   if( firstLi.className || secondLi.classList ) {
  //     firstLi.classList = "";
  //     secondLi.classList = "";
  //   }
  //     thirdLi.className = "tech"
  // }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function AlterarValue(){
  if( firstLi.className ) {
    firstLi.innerText = input.value
  }else if( secondLi.className) {
    secondLi.innerText = input.value
  }else if( thirdLi.className ) {
    thirdLi.innerText = input.value
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

 function openPortifolio() {
  window.open("https://breno-portifolio.vercel.app/", "_blank")
 }

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

 function hoverMOuse() {
  myWebpage.style.color = "red"
 }
 function downMOuse() {
   myWebpage.style.color = "#fff"
 }

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
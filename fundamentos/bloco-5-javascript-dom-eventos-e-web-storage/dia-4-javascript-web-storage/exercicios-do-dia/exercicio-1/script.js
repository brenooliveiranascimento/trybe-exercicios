// let configs = {
//   lineHeight: 1,
//   color:'#777',
//   fontFamily:"sans-serif",
//   backgroundColor:"#036B52",
//   fontSize:20
// };
let config = JSON.parse(localStorage.getItem("style-params"))
let getBtnArea = document.querySelector(".btn-container")
let getText = document.querySelector(".texto");
getText.style.lineHeight = config.lineHeight

function lodStyle() {
  getText.style.color = config.color
  getText.style.backgroundColor = config.backgroundColor
  getText.style.lineHeight = config.lineHeight
  getText.style.fontFamily = config.fontFamily
  getText.style.fontSize = config.fontSize + "px"
  console.log(config.fontSize)
}
lodStyle()


let buttons = ["mudar lineHeight", "mudar cor", "mudar fontFamily", "backgroundColor", "mudar fontSize"];
for ( let value of buttons ) {
  let btn = document.createElement("button");
  getBtnArea.appendChild(btn).innerText = value
  btn.className = "btn"
  btn.addEventListener("click", getBrnChange)

}
let getBtns = document.querySelectorAll(".btn");
function getBrnChange(event) {
  for ( let index in getBtns ) {
    if ( getBtns[index].className === "btn active-btn" ) {
      getBtns[index].className = "btn";
    }
  }
  event.target.className = "btn active-btn";
  let changeSelector = event.target.innerText
  console.log(changeSelector)
  changeSelectorType(changeSelector)
}
let activeChanges = false
function changeSelectorType( selected ) {
  let getChangeArea = document.querySelector("#change-params");
  if ( activeChanges) {
    getChangeArea.innerText = ""
    activeChanges = false
  }
//ALTERAR O ESPAÇAMENTO DAS LINHAS!
  let createPlusBtn = document.createElement("button")
  createPlusBtn.addEventListener("click", changeLineHeight)
  let getIndicateNumber = document.createElement("h2")
  let createMinunNumber = document.createElement("button")
  createMinunNumber.addEventListener("click", changeLineHeight)

  //ALTERAR fontSize DAS LINHAS!
  let btnPlusFont = document.createElement("button")
  btnPlusFont.addEventListener("click", changeFontSize)
  let getIndicateNumberFont = document.createElement("h2")
  let btnMinusFont = document.createElement("button")
  btnMinusFont.addEventListener("click", changeFontSize)

  

//ALTERAR A COR DO TEXTO!
  let createInputColor = document.createElement("input");
  let createInputBackgroundColor = document.createElement("input");
  let createBtnConfirMcolor = document.createElement("button");
  createBtnConfirMcolor.addEventListener("click", changeColor);
  createBtnConfirMcolor.addEventListener("click", changeBackgroundColor);

  let fontFamilys = ["sans-serif", "fantasy"]

  activeChanges = true
  switch (selected) {
    case "mudar lineHeight" :
      getChangeArea.appendChild(createPlusBtn).innerText = "+"
      getChangeArea.appendChild(getIndicateNumber).innerText = config.lineHeight
      getChangeArea.appendChild(createMinunNumber).innerText = "-"
      break;
    case "mudar cor" :
      getChangeArea.appendChild(createInputColor)
      createInputColor.style.borderRadius = "10px"
      createInputColor.style.padding = "2px"
      createInputColor.value = config.color
      getChangeArea.appendChild(createBtnConfirMcolor).innerText = "Atualizar cor"
      createBtnConfirMcolor.style.width = "100px"
      createBtnConfirMcolor.style.borderRadius = "4px"
      createInputColor.id = "getColor"
      break;
    case "mudar fontFamily" :
      for ( let value of fontFamilys ) {
        let createButton = document.createElement("a");
        getChangeArea.appendChild(createButton);
        createButton.addEventListener("click", (event) => {
          let getActiveFont = document.querySelectorAll(".active-font")
          for ( let index in getActiveFont ) {
            if ( getActiveFont[index].className === "active-font" ) {
              getActiveFont[index].className = "";
              break
            }
          }
          config.fontFamily = event.target.innerText;
          localStorage.setItem("style-params", JSON.stringify(config));
          event.target.className = "active-font";
          lodStyle()
        })
        createButton.innerHTML = value
      }
      break;
    case "backgroundColor" :
      getChangeArea.appendChild(createInputBackgroundColor).id = "getColorBack"
      createInputBackgroundColor.style.borderRadius = "10px"
      createInputBackgroundColor.style.padding = "2px"
      createInputBackgroundColor.value = config.backgroundColor
      getChangeArea.appendChild(createBtnConfirMcolor).innerText = "Atualizar cor"
      createBtnConfirMcolor.style.width = "100px"
      createBtnConfirMcolor.style.borderRadius = "4px"
      break;
    case "mudar fontSize" :
      getChangeArea.appendChild(btnPlusFont).innerText = "+"
      getChangeArea.appendChild(getIndicateNumberFont).innerText = config.fontSize
      getChangeArea.appendChild(btnMinusFont).innerText = "-"
      break
    default :
    break
  }

}

function changeLineHeight(event) {
  let getInput = document.querySelector("#change-params h2");
  let getText = document.querySelector(".texto");
  if ( event.target.innerText === "+" ) {
    config.lineHeight = config.lineHeight + 1
    getText.style.lineHeight = config.lineHeight
    getInput.innerText = config.lineHeight
    localStorage.setItem("style-params", JSON.stringify(config))
  } else {
    config.lineHeight = config.lineHeight -1
    if ( config.lineHeight < 1 ) {
      alert("não é póssilvel aplicar um lineHeight menor que 0!!!")
      config.lineHeight = config.lineHeight +1
      localStorage.setItem("style-params", JSON.stringify(config))
      return
    }
    getText.style.lineHeight = config.lineHeight
    getInput.innerText = config.lineHeight
    localStorage.setItem("style-params", JSON.stringify(config))
  }
}

function changeColor(){
let getColorInput = document.querySelector("#getColor").value
config.color = getColorInput
lodStyle()
localStorage.setItem("style-params", JSON.stringify(config))
}

function changeBackgroundColor() {
  let getColorInput = document.querySelector("#getColorBack").value
  console.log(getColorInput)
  config.backgroundColor = getColorInput
  lodStyle()
  localStorage.setItem("style-params", JSON.stringify(config))
}

function changeFontSize(event) {
  let getInput = document.querySelector("#change-params h2");
  let getText = document.querySelector(".texto");
  if ( event.target.innerText === "+" ) {
    config.fontSize = config.fontSize +1
    getText.style.fontSize = config.fontSize
    getInput.innerText = config.fontSize
    localStorage.setItem("style-params", JSON.stringify(config))
    lodStyle()
  } else {
    config.fontSize = config.fontSize -1
    if ( config.fontSize < 1 ) {
      alert("não é póssilvel aplicar um lineHeight menor que 0!!!")
      config.fontSize = config.fontSize +1
      localStorage.setItem("style-params", JSON.stringify(config))
      return
    }
    getText.style.fontSize = config.fontSize
    getInput.innerText = config.fontSize
    localStorage.setItem("style-params", JSON.stringify(config))
    lodStyle()
  }
}
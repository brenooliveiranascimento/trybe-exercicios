function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function placeDays() {
  for ( let value of dezDaysList ) {
    let getDays = document.querySelector("#days")
    if( value == 24 || value == 31 ) {
      let item = document.createElement("li")
      let addItem = getDays.appendChild(item).innerText = value
      item.className = "day holiday"
    }else if ( value == 4 || value == 11 || value == 18) {
      let item = document.createElement("li")
      let addItem = getDays.appendChild(item).innerText = value
      item.className = "day friday"
    }else if ( value == 25 ) {
      let item = document.createElement("li")
      let addItem = getDays.appendChild(item).innerText = value
      item.className = "day friday day holiday"
    }else {
      let item = document.createElement("li")
      addItem = getDays.appendChild(item).innerText = value
      item.className = "day"
    }
  }
}
placeDays();

function btnFeriado(feriados){
  let getDiv = document.querySelector(".buttons-container");
  let btn = document.createElement("button");
  getDiv.appendChild(btn).innerText = feriados
  btn.id = "holiday"
}
btnFeriado("Feriados")

function colorChange(){
  
  let verify = false
  let btnChange = document.querySelector("#holiday")
  btnChange.addEventListener("click", ()=>{
    let holly = document.querySelectorAll(".holiday");
    if ( verify ) {
      verify = false
      for ( let i in holly ) {
        holly[i].style.color = "#777"
      }
    }else {
      verify = true
      for( let i in holly  ) {
        holly[i].style.color = "red"
      }
    }
  })
}
colorChange()

function addBtnSexta(friday){
  let verify = false
  let getDivFriday = document.querySelector(".buttons-container");
  let createBtn = document.createElement("button")
  getDivFriday.appendChild(createBtn).innerText = friday;
  createBtn.id = "btn-friday"
  let getBtnFriday = document.querySelector("#btn-friday");
  getBtnFriday.addEventListener("click", ()=>{
    let getFridays = document.querySelectorAll(".friday");
    if( verify ) {
      verify = false;
      for ( let i in getFridays ) {
        getFridays[i].style.color = "#777"
      }
    }else {
      verify = true;
      for ( let i in getFridays ) {
        getFridays[i].style.color = "green"
      }
    }
  });
}
addBtnSexta("Sexta-feira")
let selectColor = "green"

  let getBtnTask = document.querySelector("#btn-add")
function addTask(string){
  let getTaskDiv = document.querySelector(".tasks-container")
  let createSpan = document.createElement("span")
  getTaskDiv.appendChild(createSpan).innerText = string
  createSpan.className = "my-tasks"
}
addTask("cozinhar")

let getTasks = document.querySelectorAll(".my-tasks");
function addLegenda(cor) {
  let createLegenda = document.createElement("div");
  createLegenda.className = "task"
  createLegenda.style.backgroundColor = cor
  let number = getTasks.length -1
  getTasks[number].appendChild(createLegenda)
}
addLegenda(selectColor)

let divTask = document.querySelectorAll(".task");
for ( let index in divTask ) {
  divTask[index].addEventListener("click", (event)=>{
    if ( event.target.className == "task selected" ) {
      event.target.className = "task"
    } else {
      for ( let index2 in divTask ) {
        let verify = divTask[index2].className
        if ( verify = "task selected" ) {
          event.target.className = "task"
        }
      }
      event.target.className = "task selected"
    }  
  }
)
break
}

let getDays = document.querySelectorAll(".day")

function callDays(){
  for ( let index in getDays ) {
    getDays[index].addEventListener("mouseover", ( event ) => {
      event.target.style.fontSize = "25px"
    })
    getDays[index].addEventListener("mouseout", ( event ) => {
      event.target.style.fontSize = "18px"
    })
    getDays[index].addEventListener("click", ( event ) => {
      event.target.style.color = selectColor
    })
  }
}
callDays()

let name1 = 'string endign'
let name2 = 'string woing'

function stringVerify(){
  const end1 = name1.slice(-2)
  const end2 = name2.slice(-2)
  if( end1 === end2 ){
    console.log(true)
  }else{
    console.log(false)
  }
}

stringVerify()
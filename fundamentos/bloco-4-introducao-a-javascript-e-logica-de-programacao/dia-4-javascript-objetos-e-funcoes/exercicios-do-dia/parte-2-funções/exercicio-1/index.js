
function palindromo(verify){
  const reverseName = verify.split("").reverse().join("")
  if(verify === reverseName){
    return console.log(true)
  }else{
    return console.log(false)
  }
}

palindromo("arara")
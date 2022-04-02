let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0
for( let retorno of numbers ){
  if( retorno % 2 > 0 ){
    total += 1
  }else if( total == 0 ){
    console.log("Este array não possui números impares")
  }
}
console.log(total)
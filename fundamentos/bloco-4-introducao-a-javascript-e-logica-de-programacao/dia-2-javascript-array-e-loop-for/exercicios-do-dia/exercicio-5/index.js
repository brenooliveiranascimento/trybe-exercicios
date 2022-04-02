let numbers = [5, 9, 3, 19, 70, 800, 100, 2, 35, 27];
var max = Math.max(...numbers);

for( let number of numbers ){
  if( number === max ){
    console.log(number)
  }
}
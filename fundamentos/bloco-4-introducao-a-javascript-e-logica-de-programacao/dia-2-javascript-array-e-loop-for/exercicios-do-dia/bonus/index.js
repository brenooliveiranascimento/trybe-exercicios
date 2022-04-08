let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function order() {
  for ( let i = 0; i < numbers.length; i +=1 ) {
    for ( let i2 = 0; i2 < numbers.length; i2 +=1 ) {
      if( numbers[i2] > numbers[i2 +1] ) {
        let nowPosition = numbers[i2]
        numbers[i2] = numbers[i2 +1]
        numbers[i2 +1] = nowPosition
      }
    }
  }
}
order();
console.log(numbers)

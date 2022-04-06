

function maisRepetido(numbers){
  let nowContNumber = 0;
  let higestRepiterNumber = 0;
  let indexHigestRepiterNUmber = 0;
  for( let index in numbers ){
    let verifyNowNUmber = numbers[index];
    for( let index2 in numbers ){
      if( verifyNowNUmber === numbers[index2] ){
        nowContNumber +=1;
      }
    }
    if( nowContNumber > higestRepiterNumber ){
      higestRepiterNumber = nowContNumber;
      indexHigestRepiterNUmber = index;
    }
    nowContNumber = 0
  }
  return numbers[indexHigestRepiterNUmber]
}

console.log(maisRepetido([2, 3, 3, 3, 2, 5, 8, 2, 3]));
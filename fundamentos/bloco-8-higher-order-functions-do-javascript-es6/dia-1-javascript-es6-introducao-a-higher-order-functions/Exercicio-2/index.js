
const checkNumber = (randomNumber, selectedNumber) => randomNumber === selectedNumber

const generateRandomNumber = (callBack, selectedNumber) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  return callBack(randomNumber, selectedNumber) ? 'Lucky day my friend! you won' : 'So bad! :( please try again';
}

console.log(generateRandomNumber(checkNumber, 3))

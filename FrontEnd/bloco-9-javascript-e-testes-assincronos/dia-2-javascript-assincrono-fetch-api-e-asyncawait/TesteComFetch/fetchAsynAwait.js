const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random?category=dev';

const jokeChuck = async () => {
  const result = await fetch(url)
    .then((element) => element.json())
    .then((data) => data.value)
    .catch((error) => console.log(`Ops deu erro! ${error}`))
    console.log(result)
}
jokeChuck();

const jokeTryChuck = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(`Ops ocorreu um erro :( ${error})`)
  }
}
jokeTryChuck();
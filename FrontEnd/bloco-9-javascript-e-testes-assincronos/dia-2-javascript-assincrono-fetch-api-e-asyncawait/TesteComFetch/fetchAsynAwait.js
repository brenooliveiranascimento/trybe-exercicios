const fetch = require('node-fetch');

const jokeChuck = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((element) => element.json())
    .then((data) => data.value)
    .catch((error) => console.log(`Ops deu erro! ${error}`))
    console.log(result)
}
jokeChuck();
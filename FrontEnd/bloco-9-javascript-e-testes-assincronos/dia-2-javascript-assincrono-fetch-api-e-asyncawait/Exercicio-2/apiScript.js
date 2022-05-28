// apiScript.js
const API_URL = `https://api.coincap.io/v2/assets`;
const getUl = document.querySelector("#crypto_contein");
const getBtn = document.querySelector('#find');
const getInpput = document.querySelector('#findCoinArea');
const getAllCoinBtn = document.querySelector('#showCoins');

const findCrypto = async () => {
  const findMoeda = getInpput.value;
  const getCryptos = fetch(API_URL)
    .then((element) => element.json())
    .then((arrayMoedas) => {
      const catchMoeda = arrayMoedas.data.find((moedas) => moedas.name === findMoeda);
      if (!catchMoeda) {
        alert('Moeda não encontrada')
        return
      }
      getUl.innerHTML = ''
      const createCatchedCoin = document.createElement('li');
      createCatchedCoin.innerText = `${catchMoeda.name}: ${catchMoeda.supply}`
      getUl.appendChild(createCatchedCoin);
    });

};

getBtn.addEventListener('click', findCrypto);



const injetCryptos = (moeda) => {
  moeda.data.map((coin) => {
    const number = coin.supply
    const newCoin = document.createElement('li');
    newCoin.className = coin.id;
    newCoin.innerText = `${coin.name}: ${number}`
    getUl.appendChild(newCoin);
  });
};

const fetchCoinsPrice = async () => {
  await fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      injetCryptos(data);
    });
};
fetchCoinsPrice();
getAllCoinBtn.addEventListener('click', () => {
  getUl.innerText = '';
  getInpput.value = ''
  fetchCoinsPrice();
});

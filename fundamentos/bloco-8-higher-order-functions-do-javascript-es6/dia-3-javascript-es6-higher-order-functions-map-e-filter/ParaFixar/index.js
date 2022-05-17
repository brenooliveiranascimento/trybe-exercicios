const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const prodInf = (produtos, preço) => produtos.map((value, index) => {return {name:value, valor:preço[index]}});

console.log(prodInf(products, prices));
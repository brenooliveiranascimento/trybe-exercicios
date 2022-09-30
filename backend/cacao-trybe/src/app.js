const cacaoTrybe = require('./cacaoTrybe');

const express = require('express');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ ...findChocolate });
})

module.exports = app;

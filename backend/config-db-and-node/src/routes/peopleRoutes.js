const express = require('express');
const peopleDB = require('../db/peopleDB');
const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(200).json({ message: 'Pessoa cadastrado com sucesso!' });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: `Erro ao resgistrar uma pessoa ${error}` })
  }
})

module.exports = router;

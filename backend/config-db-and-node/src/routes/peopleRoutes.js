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

router.get('/',async (_req, res) => {
  try {
    const [result] = await peopleDB.getPeoplesList();
    res.status(200).json(result)
  }catch(error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
})

router.get('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findPeopleById(id);
    if(result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada!' });
    }
  }catch(error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body
    const [result] = await peopleDB.editPeople(id);
    res.status(200).json(result);
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao atualizar o uruário' })
  }
})

module.exports = router;

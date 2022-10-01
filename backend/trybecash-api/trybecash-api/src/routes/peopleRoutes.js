const express = require('express');
const peopleDB = require('../db/peopleDB');
const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    console.log(result)
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      return res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const person = req.body;
  try {
    const [result] = await peopleDB.editById(person, id);
    if(result.affectedRows > 0) {
      return  res.status(200).json({ message: 'Pessoa de id 1 atualizada com sucesso' })
    }
    res.status(404).json({ message: 'Pessoa não encontrada, por favor, inserir dados válidos' });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao atualizar os dados do usuário' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try { 
    const [result] = await peopleDB.deletePerson(id);
    if(result.affectedRows > 0) {
      res.status(200).json({ message: 'Pessoa de id 1 excluída com sucesso' })
    } else {
      res.status(404).json({ message: 'Usuário não encontrado, por favor, inserir dados válidos' })
    };
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Falha ao deletar os dados!, tente novamente' })
  }
})

module.exports = router;
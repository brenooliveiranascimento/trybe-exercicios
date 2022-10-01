const express = require('express');

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const verifyId = (req, res, next) => {
  const { id } = req.params;
  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res.status(400).json({ message: 'time não encontrado' });
  }
};

app.get('/teams', (req, res) => res.status(200).json({ team: teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: teams });
});

app.put('/teams/:id', verifyId, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const indexOfTeam = teams.findIndex((team) => team.id === Number(id));
  const updateTeam = { ...teams };
  updateTeam[indexOfTeam].name = name;
  updateTeam[indexOfTeam].initials = initials;

  res.status(202).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const deleteItem = teams.filter((team) => team.id !== Number(id));
  res.status(203).json(deleteItem).end();
});

module.exports = app;

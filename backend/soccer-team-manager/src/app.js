const express = require('express');

const app = express();
app.use(express.json());

// app.get('/tatakae', (req, res) => res.status(200).json({ tatakae: 'Tatakaeson!' }));

// app.get('/search', (req, res) => {
//   const { name, idade } = req.query;
//   res.status(200).send(`Recebi o nome ${name} e a idade ${idade}`);
// });

// app.post('/user/:id', (req, res) => {
//   const { id } = req.params;
//   res.status(200).send(`O indentificador informado possui o valor ${id}`);
// });

// app.get('/data', (req, res) => {
//   const user = req.body;
//   res.status(200).send(`O nome é ${user.name} e a idade é ${user.idade}`);
// });

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

app.get('/teams', (req, res) => res.status(200).json({ team: teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: teams });
});

app.put('/teams/:id', (req, res) => {
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

  // const teamIndex = teams.findIndex((team) => team.id === Number(id));
  // teams.splice(teamIndex, 1);

  res.status(203).json(deleteItem).end();
});

module.exports = app;

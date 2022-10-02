const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone]
)

const getPeoplesList = () => conn.execute(`SELECT * FROM people`)

const findPeopleById = (id) => conn.execute(`SELECT * FROM people WHERE id = ?`, [id]);

const editPeople = (id, person) => conn.execute(
  `UPDATE people SET first_name = ?, last_name = ?, email = ?, phone = ?
    WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id]
)

module.exports = {
  insert,
  findPeopleById,
  getPeoplesList,
  editPeople,
};

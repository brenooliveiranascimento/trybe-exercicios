const conn = require('./connection');

const put = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone)`,
    [person.firstName, person.lastName, person.email, person.phone]
)

module.exports = put;

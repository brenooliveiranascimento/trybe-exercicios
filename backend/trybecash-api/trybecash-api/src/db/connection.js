const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'Breno564breno?',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gabiazevedo',
  password: 'Ektopak110910#',
  database: 'model_example' });

module.exports = connection;

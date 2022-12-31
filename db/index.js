var mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'AQWaqw313@',
    database: 'thinksyria'
});

module.exports = connection
  
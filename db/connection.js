const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'DB_USER',
    password: 'DB_PW',
    database: 'DB_NAME'
});

module.exports = db;
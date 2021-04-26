const mysql = require('mysql2');
const connection = require('../db/connection');

// initialize managers list array
let managersArray = [];
const sql = `SELECT * FROM employee`;

connection.query(sql, (err, rows) => {
    if (err) {
        console.log(err.message );
        return;
    }
    // extract employee's table and allow any employee to be manager
    rows.forEach((element) => {
        managersArray.push(element.first_name + ' ' + element.last_name);
    });
});

module.exports = managersArray;

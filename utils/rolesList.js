const mysql = require('mysql2');
const connection = require('../db/connection');

// initialize roles array
let roleNamesArray = [];
const sql = `SELECT * FROM role`;

connection.query(sql, (err, rows) => {
    if (err) {
        console.log(err.message );
        return;
    }
    // Extract the title property from array of obj's into a new roles array
    rows.forEach((element) => {
        roleNamesArray.push(element.title);
    });
});

module.exports = roleNamesArray;

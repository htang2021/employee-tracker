const mysql = require('mysql2');
const cTable = require('console.table');

const connection = require('../db/connection');

function updateEmployee(role) {

    const sql = `UPDATE employee
            SET role_id = 
    `;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log('');
        console.log('Department has been added to the database.');
        console.table(rows); 
    });
}

module.exports = { updateEmployee };
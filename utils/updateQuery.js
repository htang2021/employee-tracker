const mysql = require('mysql2');
const cTable = require('console.table');

const connection = require('../db/connection');

function updateEmployee(role) {

    const sql = `UPDATE employee
            SET role_id = ${role.role_id}, manager_id = ${role.manager_id}
            WHERE 
    `;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log('');
        console.log("Employee's role has been updated to the database.");
        console.table(rows); 
    });
}

module.exports = { updateEmployee };
// const db = require('../db/connection');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});

function viewAllEmployees() {

    const sql = `SELECT * FROM employee`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.table(rows);
    });
    return;
}

function viewAllDepartments() {

    const sql = `SELECT * FROM department`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.table(rows);
    });
}

function viewAllRoles() {

    const sql = `SELECT * FROM role`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.table(rows);
    });
}

// viewAllEmployees();

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
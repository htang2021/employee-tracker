// const db = require('../db/connection');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});

// function to join 3 tables in DB to display in a single table to the user
function viewAllEmployees() {

    const sql = `SELECT employee2.id AS employee_id, employee2.first_name, 
    employee2.last_name, role.title, department.dept_name, role.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) AS Manager_Name
    FROM employee employee2
    JOIN employee manager 
    ON employee2.manager_id = manager.id
    INNER JOIN role ON employee2.role_id = role.id
    INNER JOIN department ON department.id = role.department_id
    ORDER BY employee2.id
    `;

    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        // displays a 3-tables joined results
        console.log(' ');
        console.table(rows); 
    });
    return;
}

// function to display the department table from the DB
function viewAllDepartments() {

    const sql = `SELECT * FROM department`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        // displays department table from DB
        console.log(' ');
        console.table(rows);
    });
    return;
}

// function to display the role table from DB
function viewAllRoles() {

    const sql = `SELECT * FROM role`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log(' ');
        console.table(rows);
    });
    return;
}

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
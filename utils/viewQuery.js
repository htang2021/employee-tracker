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

    const sql = `SELECT employee2.id AS employee_id, employee2.first_name, 
    employee2.last_name, role.title, department.dept_name, role.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) as Manager_Name
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
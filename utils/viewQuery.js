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
        console.log(' ');
        return console.table(rows); 
    });
    // return;
}

function viewAllDepartments() {

    const sql = `SELECT * FROM department`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        let newArry = json(rows);
        console.log('*************');
        console.log(newArry);
        console.log('===============');

        let rowsObjArry = JSON.stringify(rows);
        console.log('');
        console.log(rowsObjArry);
        let newRowObj = rowsObjArry.split('}');
        console.log(newRowObj);

        console.log(rowsObjArry[0], rowsObjArry[1], rowsObjArry[2]);

        // rowsObjArry.forEach(element => {
        //     console.log(element.dept_name);
        // });

        console.log(' ');
        console.table(rows);
        // return rowsObj;
    });
}

function viewAllRoles() {

    const sql = `SELECT * FROM role`;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log(' ');
        console.table(rows);
        return;
    });
}

// viewAllEmployees();

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});

function addAdepartment(dept) {

    const sql = `INSERT INTO department (dept_name)
            VALUES ('${dept.deptName}')
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

function addArole(newRole) {
    console.log(newRole);
    const sql = `INSERT INTO role (title, salary, department_id)
            VALUES ('${newRole.title}', ${newRole.salary}, ${newRole.deptId} )
    `;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log('');
        console.log('A new role has been added to the database.');
        console.table(rows); 
        return;
    });
}

function addAnEmployee(newEmployee) {

    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${newEmployee.firstName}', '${newEmployee.lastName}', ${newEmployee.roleId}, ${newEmployee.yourManager})
    `;
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message );
            return;
        }
        console.log('');
        console.log('Employee has been added to the database.');
        console.table(rows); 
    });
}

module.exports = { addAdepartment, addArole, addAnEmployee };
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});

function updateEmployee(dataUpdate) {

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

module.exports = { updateEmployee };
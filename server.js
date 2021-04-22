const inquirer = require('inquirer');
const sql = require('mysql2');
const db = require('./db/connection');

require('dotenv').config(); //process.env.DB_User for example

const entrySelect = ['view all departments', 'view all roles', 
    'view all employees', 'add a department', 'add a role', 
    'add an employee', 'update an employee role'];

const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'entryOptions',
            message: 'Please choose your option from the list: ',
            choices: entrySelect,
            validate: selection => {
                if (selection) {
                    return true;
                } else {
                    console.log('Please choose an option!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name?",
        },
        {
            type: 'number',
            name: 'employeeAge',
            message: "Your employee's age?"
        }
    ]);
}

promptUser()
    .then(answer => {
        console.log(answer);
    });

const inquirer = require('inquirer');
const cTable = require('console.table');
const sql = require('mysql2');
// const db = require('./db/connection'); // this causes promise to break.

// require('dotenv').config(); //process.env.DB_User for example

const entrySelect = ['View All Employees', 'View All Departments', 'View All Roles', 
    'Add A Department', 'Add A Role', 'Add An Employee', 
    'Update Employee Role', 'Update Employee Manager'];


// Print to screen the name of app, and esc character for back-slash(\)
console.log(`
 ________________________________________________________
|                                                        |
|      _____                 _                           |
|     |_____|  __ ___  ___  | | ___  _   _  ___  ___     |
|     |  _| |/ _   _ \\|  _ \\| |/ _ \\| | | |/ _ \\/ _ \\    |
|     | |___| | | | | | |_) | | ( ) | |_| |  __/  __/    |
|     |_____|_| |_| |_| ___/|_|\\___/ \\__, |\\___|\\___|    |
|                     |_|            |___/               |
|      __  __                                            |
|     |  \\/  | __ _ _ __   __ _  __ _  ___ _ __          |
|     | |\\/| |/ _' | '_ \\ / _' |/ _' |/ _ \\ '__|         |
|     | |  | | ( | | | | | ( | | (_| |  __/ |            |
|     |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|            |
|                               |___/                    |
|                                                        |
|________________________________________________________|

`);

const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'entryOptions',
            message: 'What would you like to do? ',
            choices: entrySelect,
            validate: selection => {
                if (selection) {
                    return true;
                } else {
                    console.log('Please choose an option!');
                    return false;
                }
            },
            default: 'View All Employees'
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name?",
            validate: haveName => {
                if (haveName) {
                    return true;
                } else {
                    console.log("Please enter employee's name!");
                    return false;
                }
            }
        }
        // {
        //     type: 'number',
        //     name: 'employeeAge',
        //     message: "Your employee's age?"
        // }
    ]);
}

promptUser()
    .then(answer => {
        console.table(answer);
    });

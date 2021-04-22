const inquirer = require('inquirer');
const printToScreen = require('./utils/initAppName');
const { viewAllEmployees, 
    viewAllDepartments, 
    viewAllRoles } = require('./utils/viewQuery');
// const db = require('./db/connection'); // this causes promise to break.

const entrySelect = ['View All Employees', 'View All Departments', 'View All Roles', 
    'Add A Department', 'Add A Role', 'Add An Employee', 
    'Update Employee Role', 'Update Employee Manager'];

// calls the module to print the app name
printToScreen.appName();

const promptUserChoice = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selectedOption',
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
        }
        // {
        //     type: 'input',
        //     name: 'employeeName',
        //     message: "What is the employee's name?",
        //     validate: haveName => {
        //         if (haveName) {
        //             return true;
        //         } else {
        //             console.log("Please enter employee's name!");
        //             return false;
        //         }
        //     }
        // }
        // {
        //     type: 'number',
        //     name: 'employeeAge',
        //     message: "Your employee's age?"
        // }
    ]);
}

promptUserChoice()
    .then(choice => {
        if (choice.selectedOption === 'View All Employees') {
            viewAllEmployees();
        } else if (choice.selectedOption === 'View All Departments') {
            viewAllDepartments();
        } else if (choice.selectedOption === 'View All Roles') {
            viewAllRoles();
        }
    });
    // .then()

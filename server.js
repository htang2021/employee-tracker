const inquirer = require('inquirer');

// imports print function to display app name
const printToScreen = require('./utils/initAppName');

// import a function to create the roles array
const availableRoles = require('./utils/rolesList');
// import a function to create the managers list array
const managerSelection = require('./utils/managersList'); 

// Importing all view functions
const { viewAllEmployees, 
    viewAllDepartments, 
    viewAllRoles } = require('./utils/viewQuery');

// Importing all add functions 
const { addAdepartment,
    addArole,
    addAnEmployee } = require('./utils/addQuery');

const {updateEmployee} = require('./utils/updateQuery');

const { exclude } = require('inquirer/lib/objects/separator');


const entrySelect = ['View All Employees', 'View All Departments', 'View All Roles', 
    'Add A Department', 'Add A Role', 'Add An Employee', 
    'Update Employee Role', 'Quit'];

// calls the module to print the app name
printToScreen.appName();

const promptUserChoice = () => {
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selectedOption',
            message: 'What would you like to do? ',
            choices: entrySelect,
            pageSize: 20,
            loop: true
        }
    ]);
}

// Adding a department inquiry prompt
const promptAddAdept = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the department you like to add? ',
            validate: dept => {
                if (dept) {
                    return true;
                } else {
                    console.log('Please enter the department name!');
                    return false;
                }
            }
        }
    ]);
}

// Adding a new role inquiry prompt
const promptAddArole = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the new role you like to add? ',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter the title for the new role!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'salary',
            message: 'What is the annual salary for this role (numbers only): ',
            validate: numbers => {
                if (numbers) {
                    return true;
                } else {
                    console.log('Please enter the department name!');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'deptId',
            message: 'Which department is this role in?  ',
            choices: entrySelect
        }
    ]);
}

// Prompt to add an employee
const promptAddAnEmployee = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name? ",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log('Please enter the first name of the new employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name? ",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('Please enter the last name of the new employee!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'roleId',
            message: "What is the employee's role? ",
            choices: availableRoles
        },
        {
            type: 'list',
            name: 'yourManager',
            message: "Who is employee's manager? ",
            choices: managerSelection
        }
    ]);
}

const promptUpdateRole = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeToUpdate',
            message: "Which employee's role requires updating? ",
            choices: managerSelection // == employee's list
        },
        {
            type: 'list',
            name: 'updatedRole',
            message: "What is the employee's updated role? ",
            choices: availableRoles
        },
        {
            type: 'list',
            name: 'roleId',
            message: "Who is the employee's new manager? ",
            choices: managerSelection
        }
    ]);
}

// Starting point, prompting for user choice
promptUserChoice()
    .then(choice => {
        while (choice.selectedOption !== 'Quit') {
            if (choice.selectedOption === 'View All Employees') {
                viewAllEmployees();
            } else if (choice.selectedOption === 'View All Departments') {
                viewAllDepartments();
            } else if (choice.selectedOption === 'View All Roles') {
                viewAllRoles();
            } else if (choice.selectedOption === 'Add A Department') {
                promptAddAdept().then((deptName) => {
                    addAdepartment(deptName);
                }).then(() => {promptUserChoice()});
            } else if (choice.selectedOption === 'Add A Role') {
                promptAddArole().then((newRole) => {
                    addArole(newRole);
                });
            } else if (choice.selectedOption === 'Add An Employee') {
                promptAddAnEmployee().then((newEmployee) => {
                    addAnEmployee(newEmployee);
                });
            } else if (choice.selectedOption === 'Update Employee Role') {
                promptUpdateRole().then((updateRole) => {
                    updateEmployee(updateRole);
                });
            }


        }
    })
    .then(() => { promptUserChoice() });

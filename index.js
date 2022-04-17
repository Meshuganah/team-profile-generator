const inquirer = require('inquirer');

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the name of your team manager?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the current employee's id number?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the current employee's email?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the office number of this manager?`,
        },
    ])
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the name of this employee?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the current employee's id number?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the current employee's email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is this engineer's gitHub user name?`,
        },
    ])
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the name of this employee?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the current employee's id number?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the current employee's email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: `What school did this intern graduate from / is attending?`
        },
    ])
};

const addAnotherEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message: `Would you like to add another employee? Or does this complete your roster?`,
            choices: ['Engineer', 'Intern', 'None'],
        },
    ])
};
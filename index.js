const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const { writeFile } = require(`./src/generate-site`);

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

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
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        addAnotherEmployee();
    });
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
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        addAnotherEmployee();
    });
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
    ]). then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        addAnotherEmployee();
    });
};

const addAnotherEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message: `Would you like to add another employee? Or does this complete your roster?`,
            choices: ['Engineer', 'Intern', 'None'],
        },
    ]).then(data => {
        console.log(data);
        if (data.addAnotherEmployee === 'Engineer') {
            return engineerPrompt();
        }
        else if (data.addAnotherEmployee === 'Intern') {
            return internPrompt();
        } else {
            return;
        }
    })
};

managerPrompt()
//  .then(managerArr, engineerArr, internArr => {
//      return generatePage(managerArr, engineerArr, internArr)
//  })
//  .then(pageHTML => {
//      return writeFile(pageHTML);
//  })
//  .catch(err => {
//      console.log(err);
//  });

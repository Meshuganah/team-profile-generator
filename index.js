const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const { writeFile } = require(`./src/generate-site`);

let managerArr = [];
let engineerArr = [];
let internArr = [];

const managerPrompt = (managerArr) => {
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
        managerArr.push(data);
        addAnotherEmployee();
    });
};

const engineerPrompt = (engineerArr) => {
    //Creates an array for engineers

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
        engineerArr.push(data);
        addAnotherEmployee();
    });
};

const internPrompt = (internArr) => {
    //Creates an array for interns

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
        internArr.push(data);
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
            return engineerPrompt(engineerArr);
        }
        else if (data.addAnotherEmployee === 'Intern') {
            return internPrompt(internArr);
        } else {
            generatePage(managerArr, engineerArr, internArr);
            writeFile(pageHTML);
        }
    })
};

managerPrompt(managerArr)
//  .then(managerArr, engineerArr, internArr => {
//      return generatePage(managerArr, engineerArr, internArr)
//  })
//  .then(pageHTML => {
//      return writeFile(pageHTML);
//  })
//  .thencatch(err => {
//      console.log(err);
//  });

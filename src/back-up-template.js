
//Generates the Manager Card
const generateManager = manager => {
    return `
    ${manager
    .map(({ name, id, email, officeNumber }) => {
        return `
        <div class="card manager-card border border-dark col-3 bg-primary mx-5">
        <div class="card-body">
            <h5 class="card-title text-light">${name}</h5>
            <h5 class="card-subtitle text-light">Manager</h5>
            <ul class="list-group">
                <li class="list-group-item">ID:${id} </li>
                <li class="list-group-item">Email:<a href="${email}">${email}</a></li>
                <li class="list-group-item">Office Number:${officeNumber}</li>
            </ul>
        </div>
    </div>
        `;
    }).join('')}
    `;
};

//Generates the Engineer Card
const generateEngineer = engineer => {
    return `
        ${engineer
        .map(({ name, id, email, github }) => {
            return `
            <div class="card enginner-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${name}</h5>
                <h5 class="card-subtitle text-light">Engineer</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email:<a href="${email}">${email}</a></li>
                    <li class="list-group-item">GitHub:<a href="github.com/${github}">${github}</a></li>
                </ul>
            </div>
        </div>
            `;
        }).join('')}
    `;
};

//Generates the Intern card
const generateIntern = intern => {
    return `
        ${intern
        .map(({ name, id, email, school }) => {
            return `
            <div class="card intern-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${name}</h5>
                <h5 class="card-subtitle text-light">Intern</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email:<a href="${email}">${email}</a></li>
                    <li class="list-group-item">${school}</li>
                </ul>
            </div>
        </div>
            `;
        }).join('')}
    `;
};

module.exports = employees => {
    
const manager = [];
const engineer = [];
const intern = [];

manager.push(employees.filter(employee => employee.getRole() === 'Manager'));
engineer.push(employees.filter(employee => employee.getRole() === 'Engineer'));
intern.push(employees.filter(employee => employee.getRole() === 'Intern'));


    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Roster</title>
</head>
<body>
    <header class="border-bottom border-dark mb-5 bg-primary">
        <h1 class="text-center text-light">Your Team Roster:</h1>
    </header>
    <div class="row">
        ${generateManager(manager)}
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
    </div>
</body>
</html>
    `;
};

module.exports = employees => {

employees.forEach(employee => {
    if(employee.getRole() === 'Manager') {
        console.log(employee.getOfficeNumber());
        return `
        <div class="card manager-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${employee.getName()}</h5>
                <h5 class="card-subtitle text-light">Manager</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID:${employee.getId()} </li>
                    <li class="list-group-item">Email:<a href="${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${employee.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }
})
};




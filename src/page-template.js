let employeeCards = '';

const generate = (employees) => {
    employees.forEach(employee => {
        if (employee.getRole() === "Manager") {
            employeeCards += `
            <div class="card manager-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${employee.getName()}</h5>
                <h5 class="card-subtitle text-light">Manager</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID:${employee.getId()} </li>
                    <li class="list-group-item">Email:<a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${employee.getOfficeNumber()}</li>
                </ul>
            </div>
            </div>
            `;
        }
        else if (employee.getRole() === "Engineer") {
            employeeCards += `
            <div class="card enginner-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${employee.getName()}</h5>
                <h5 class="card-subtitle text-light">Engineer</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID:${employee.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">GitHub:<a href="github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
            `;
        }
        else if (employee.getRole() === "Intern") {
            employeeCards += `
            <div class="card intern-card border border-dark col-3 bg-primary mx-5">
            <div class="card-body">
                <h5 class="card-title text-light">${employee.getName()}</h5>
                <h5 class="card-subtitle text-light">Intern</h5>
                <ul class="list-group">
                        <li class="list-group-item">ID:${employee.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">${employee.getSchool()}</li>
                    </ul>
                </div>
            </div>
             `;
        };
    })
    return employeeCards;
};

module.exports = employees => {   
    generate(employees)
    const fileContent = `
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
        ${employeeCards}
    </div>
</body>
</html>
    `;
    //console.log(fileContent);
    return fileContent;
};

const Manager = require("./Manager");
const inquirer = require('inquirer');
// const Employee = require('./Employee');

class startApp {

    constructor() {

    }

    begin() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your employee ID?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'officeNumber',
                }
            ]).then((response) => {
                console.log(response);
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                console.log(manager);
                console.log(manager);
                manager.getName();
                // fs.writeFile("dist/index.html", makePage(manager), (err) =>
                //     err ? console.error(err) : console.log("Success!")
                // );
            });
    }
}

module.exports = startApp;
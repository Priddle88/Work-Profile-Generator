const Manager = require("./Manager");
const inquirer = require('inquirer');
// const Employee = require('./Employee');
const fs = require("fs");
const Engineer = require("./Engineer");
const whatsNext = ["Add an Engineer", "Add an Intern", "Finish building my team"];

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
                const managerHtml = `<!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Work Profile Generator</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
                    <link rel="stylesheet" href="./dist/style.css" />
                </head>
                
                <body>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">My Team</h1>
                        </div>
                    </div>
                    <div class="belowJumbo">
                        <div class="cards">
                            <div class="cardHeader">
                                <h4>${manager.getName()}</h4>
                                <h5>☕️ ${manager.getRole()}</h5>
            </div>
            <div class="cardInfo">
                <p>ID: ${manager.getId()}</p>
                <p>Email: ${manager.getEmail()}</p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>`;

                console.log(managerHtml);
                this.menu();
            });
    }

    menu() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What would you like to do next?',
                    choices: whatsNext,
                    name: 'next',
                }
            ]).then((response) => {
                //if statements for engineer, intern, or done

                if (response.next == "Add an Engineer") {
                    this.engineerHTML();
                }
            })
    }

    engineerHTML() {
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
                    message: 'What is your GitHub username?',
                    name: 'github',
                }
            ]).then((response) => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                console.log(engineer);

                let engineerHTML = ` <div class="cards">
                <div class="cardHeader">
                    <h4>${engineer.getName()}</h4>
                    <h5>👓 ${engineer.getRole()}</h5>
                </div>
                <div class="cardInfo">
                    <p>ID: ${engineer.getId()}</p>
                    <p>Email: ${engineer.getEmail()}</p>
                    <p>Github: ${engineer.getGithub()}</p>
                </div>
            </div>`;

                console.log(engineerHTML);
                this.menu;
            })
    }

}

module.exports = startApp;
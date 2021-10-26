// -----------------------------------------------------
//Packages needed for this application
// -----------------------------------------------------

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

// -----------------------------------------------------
// Questions
// -----------------------------------------------------

// Manager
const questions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is the managers name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter managers name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the employee ID',
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log('Please enter the ID!');
            return false;
          }
        }
    },
    {
        type: 'input',  
        name: 'Email',
        message: 'What is their email?',
        validate: EmailInput => {
          if (EmailInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'OfficeNumber',
        message: 'What is their office number?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their office number!');
            return false;
          }
        }
    },
];

// Engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is their ID?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their ID!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is their email?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their github!');
            return false;
          }
        }
    }
];

// Intern
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is their ID?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their ID!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is their email?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their school?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their school!');
            return false;
          }
        }
    }
];

// Rest of Team
const teamQuestions = [
    {
        type: 'list',
        name: 'TeamMember',
        message: 'What kind of Team member are you?',
        choices: ['Engineer', 'Intern'],
        validate: TeamMemberList => {
            if('Engineer') {
                inquirer.prompt(engineerQuestions) 
                .then(data => {
                    console.log(data)
                    writeToFile("index.html",generateMarkdown3(data))
                })
            } else{
                inquirer.prompt(internQuestions) 
                .then(data => {
                    console.log(data)
                    writeToFile("index.html",generateMarkdown3(data))
                })
            }
        }
    },
    {
        type: 'list',
        name: 'addNew',
        message: 'Would you like to add another team member?',
    }

];

// -----------------------------------------------------
// Function to write html file
// -----------------------------------------------------

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

function init() {

    // Manager Information
    inquirer.prompt(questions) 
        .then(data => {
        console.log(data)
        writeToFile("index.html",generateMarkdown(data))
    }) 
    // Rest of Team's Information
    inquirer.prompt(teamQuestions) 
        .then(data => {
        console.log(data)
        writeToFile("index.html",generateMarkdown2(data))
    })
}

// -----------------------------------------------------
// Function call to initialize app
// -----------------------------------------------------

init();
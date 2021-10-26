//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown')

// -----------------------------------------------------
// Questions
// -----------------------------------------------------
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

const teamQuestions = [
    {
       
    }
];

// Function to write html file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

function init() {
    // Manager Information
    inquirer.prompt(questions) 
        .then(data => {
        console.log(data)
        writeToFile("index.html",generateMarkdown(data))
    }),
    // Rest of Team's Information
    inquirer.prompt(teamQuestions) 
        .then(data => {
        console.log(data)
        writeToFile("index.html",generateMarkdown(data))
    })
}

// Function call to initialize app
init();
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
        name: 'title',
        message: 'What is the project Title?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter project Name!');
            return false;
          }
        }
    }
];

// Function to write html file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

function init() {
    inquirer.prompt(questions) 
        .then(data => {
        console.log(data)
        writeToFile("index.html",generateMarkdown(data))
    })
}

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const fs       = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    )
    .then((data) => {
        writeToFile('OUTPUT.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();

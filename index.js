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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators or any third party assets that require attribution'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Github repo, for license',
        choices: ['MIT', 'Unlicense', 'Apache 2.0', 'IBM Public']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how someone would go about contributing to the repo'
    },
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

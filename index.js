// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
const questions = [{
    type: 'input',
    message: 'What is your name?'.magenta,
    name: 'name',
},
{
    type: "input",
    message: "Where are you from?".magenta,
    name: "location",
},
{
    type: "input",
    message: "Enter a bio?".magenta,
    name: "bio",
},
{
    type: "input",
    message: "What is your Linkedin?".magenta,
    name: "linkedin",
},
{
    type: "input",
    message: "What is your Github Username?".magenta,
    name: "github",
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([questions])
        .then((data) => {
            const { fileName, data } = data
            const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
            const data = `#`;
            fs.writeFile('README.md', (data), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { features } = require("process");
// TODO: Create an array of questions for user input
const generateREADME = ({title, description, installation, usage, credits, license, badges, features, contribute, tests, questions, email }) =>
`#${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

### Reach Me

${questions}

${email}

## Credits

${credits}

## Lisence

${license}

## Badges

${badges}

## Features

${features}

## How to Contribute

${contribute}

## Tests

${tests}
`;

function writeToFile() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: "input",
                message: "Write a brief description?",
                name: "description",
            },
            {
                type: "input",
                message: "What is the installation process?",
                name: "installation",
            },
            {
                type: "input",
                message: "How is this project used? What are the steps?",
                name: "usage",
            },
            {
                type: "input",
                message: "What is your github?",
                name: "questions",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "input",
                message: "Add who worked on the project.",
                name: "credits",
            },
            {
                type: "input",
                message: "What license (if any) does this use?",
                name: "license",
            },
            {
                type: "input",
                message: "Add some badges.",
                name: "badges",
            },
            {
                type: "input",
                message: "What are the important features?",
                name: "features",
            },
            {
                type: "input",
                message: "How can people contribute?",
                name: "contribute",
            },
            {
                type: "input",
                message: "Have you written TEST for this application?",
                name: "tests",
            },
        ])
        .then((answers) => {
            const readme = generateREADME(answers);
            fs.writeFile('README.md', (readme), (err) =>
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

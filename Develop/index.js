const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer  = require('inquirer');
const fs = require('fs');
const teamMembers = [];
const path = require("path")

// TODO: CODE GOES HERE
const promptManager = () => {
return inquirer.prompt ([
        {
            type: 'input',
            name:  'name',
            message: 'what is your name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email',
        },
        {
            type: 'input',
            name: 'office',
            message: 'what is your office number',
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamMembers.push(manager);
        promptMenu();
    })}

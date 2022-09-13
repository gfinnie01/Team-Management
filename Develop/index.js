const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer  = require('inquirer');
const fs = require('fs');
const teamMembers = [];
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "template.html");
const generateSite = require('./src/page-template')



const promptMenu = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'menu',
        message: 'choose one',
        choices: ['add a engineer', 'add a intern', 'I am done with my team', 'add a manager']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'add a engineer':
                    promptEngineer();
                    break;
                case 'add a intern':
                    promptIntern();
                    break;
                case 'add a manager':
                    promptManager();
                    break;
                default:
                    buildTeam();
            }
        });
};
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
    })
}; 
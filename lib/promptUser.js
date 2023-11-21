const handleAnswers = require('./handleAnswers');
const questions = require('./questions');
const inquirer = require('inquirer');


const promptUser = () => {
    inquirer.prompt(questions)
        .then((data) => handleAnswers(data));
};

module.exports = promptUser;

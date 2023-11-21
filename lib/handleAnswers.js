const db = require('../config/connection.js');
const questions = require('./questions.js');
const inquirer = require('inquirer');


const handleAnswers = (answers) => {
    const { choices } = answers;
    switch (choices) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;
      
        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'End':
          db.end();
          break;
      }
    };

const promptUser = async () => {
    const data = await inquirer.prompt(questions);
    handleAnswers(data);
};

const viewDepartments = () => {
    const script = 'SELECT department.id AS id, department.dep_name AS department FROM department';
    db.query(script, (err, results) => {
        err ? console.log(err) : console.log('Showing departments...\n');
        console.table(results);
        promptUser();
    });
};

const viewRoles = () => {

}


module.exports = { 
    handleAnswers,
    promptUser, 
};
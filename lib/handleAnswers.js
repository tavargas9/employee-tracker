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
    const script = `
    SELECT department.id AS id, 
    department.dep_name AS department 
    FROM department
    `;
    db.query(script, (err, results) => {
        err ? console.log(err) : console.log('Showing departments...\n');
        console.table(results);
        promptUser();
    });
};

const viewRoles = () => {
    const script = `
    SELECT role.id, role.title, department.dep_name 
    AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id
    `;
    db.query(script, (err, results) => {
        err ? console.log(err) : console.log('Showing roles...\n');
        console.table(results);
        promptUser();
    });
};

const viewEmployees = () => {
    const script = `
    SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.dep_name AS department,
    role.salary, 
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    `;
    db.query(script, (err, results) => {
        err ? console.log(err) : console.log('Showing employees...\n');
        console.table(results);
        promptUser();
    });
};


module.exports = { 
    handleAnswers,
    promptUser, 
};
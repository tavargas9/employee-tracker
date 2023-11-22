const db = require('../config/connection.js');
const { questions, addDepQuestions, addRoleQuestions } = require('./questions.js');
const inquirer = require('inquirer');
const { Department, Role, Employee } = require('./Classes.js');

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

const queryDb = (query) => {
    db.query(query, (err, res) => {
        err ? console.log(err) : console.table(res);
        promptUser();
    });
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
    queryDb(script);
};

const viewRoles = () => {
    const script = `
    SELECT role.id, role.title, department.dep_name 
    AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id
    `;
    queryDb(script);
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
    queryDb(script);
};

const addDepartment = async () => {
    const data = await inquirer.prompt(addDepQuestions);
    pushDepartment(data);
};

const pushDepartment = (dept) => {
    newDept = new Department(dept.addDep);
    const script = newDept.render();
    db.query(script, err => {
        if (err) throw err;
        viewDepartments();
    });
};

const addRole = async () => {
    const data = await inquirer.prompt(addRoleQuestions);
    pushRole(data);
};

const pushRole = (role) => {
    const query = `SELECT dep_name, id FROM department`;
    db.query(query, (err, res) => {
        if (err) throw err;
        const dep = res.map(({ dep_name, id }) => ({ name: dep_name, value: id }));
        inquirer.prompt([
            {
                type: 'list', 
                name: 'department',
                message: "What department is this role in?",
                choices: dep
            }
        ]).then(data => {
            const dep = data.department;
            newRole = new Role(role.role, role.salary, dep);
            const script= newRole.render();
            db.query(script, err => {
                if (err) throw err;
                viewRoles();
            });
        });
    });
};

module.exports = { 
    handleAnswers,
    promptUser, 
};
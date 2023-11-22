const questions = [
    {
      type: 'list',
      name: 'choices', 
      message: 'What would you like to do?',
      choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role',
                'Update an employee manager',
                "View employees by department",
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View department budgets',
                'End'
            ]
    }
  ];

  const addDepQuestions = [
    {
      type: 'input', 
      name: 'addDep',
      message: "What department do you want to add?",
      validate: addDep => {
        if (addDep) {
            return true;
        } else {
            console.log('Please input a department!');
            return false;
        }
      }
    }
  ];

  const addRoleQuestions = [
    {
      type: 'input', 
      name: 'role',
      message: "What role do you want to add?",
      validate: addRole => {
        if (addRole) {
            return true;
        } else {
            console.log('Please input a role!');
            return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'salary',
      message: "What is the salary of this role?",
      validate: addSalary => {
        if (!isNaN(addSalary)) {
            return true;
        } else {
            console.log('Please input a number!');
            return false;
        }
      }
    }
  ];

  module.exports = { 
    questions,
    addDepQuestions,
    addRoleQuestions
  };
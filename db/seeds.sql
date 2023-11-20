INSERT INTO department (dep_name) 
VALUES
('Sales'),
('Finance'),
('Engineering'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 65000, 1),
('Financial Analyst', 125000, 2),
('Accountant', 75000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, NULL),
('Mike', 'McDaniels', 2, 1),
('Steve', 'Buscemi', 3, NULL),
('Ryan', 'Reynolds', 4, 3),
('Charlie', 'Day', 5, NULL),
('Ronald', 'McDonald', 6, 5),
('Dennis', 'Rodman', 7, NULL),
('Warren', 'Miller', 8, 7);




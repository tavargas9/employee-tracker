class Department {
    constructor (depName) {
        this.depName = depName;
    }

    render() {
        return `INSERT INTO department (dep_name) VALUES ('${this.depName}')`;
    }
}

class Role {
    constructor (title, salary, deptId) {
        this.title = title;
        this.salary = salary;
        this.deptId = deptId;
    }

    render() {
        return `INSERT INTO role (title, salary, department_id)
        VALUES ('${this.title}', '${this.salary}', '${this.deptId}')`;
    }
}

class Employee {
    constructor (firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    render() {
        return `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${this.firstName}', '${this.lastName}', '${this.roleId}', '${this.managerId}')`
    }
}

module.exports = {
    Department,
    Role,
    Employee,
};
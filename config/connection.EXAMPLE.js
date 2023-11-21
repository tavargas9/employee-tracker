const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: '127.0.0.1', // Could be 'localhost' or '127.0.0.1'
        user: 'root', // Change username if necessary
        password: 'yourPassword', // Add your mysql password here
        database: 'employee_db'
    },
    console.log('Connected to the database')
);

// module.exports = db;

// Uncomment the 'module.exports' code above.

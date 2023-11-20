const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'myPassword',
        database: 'example_db'
    },
    console.log('Connected to the database')
);

module.exports = db;


const db = require('./config/connection.js');
const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const handleAnswers = require('./lib/handleAnswers.js');
const init = require('./lib/init.js')

db.connect(err => {
    if (err) throw err;
    console.log('connected as id' + db.threadId);
    init();
});
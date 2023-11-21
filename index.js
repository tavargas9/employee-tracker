const db = require('./config/connection.js');
const init = require('./lib/init.js')

db.connect(err => {
    if (err) throw err;
    console.log('connected as id' + db.threadId);
    init();
});
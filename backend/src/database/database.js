const mysql = require('mysql');

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "mydatabase"
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

module.exports = db;
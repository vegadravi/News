const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4201"]
}));
// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "mydatabase"
});

db.connect((err:any) => {
    if (err) throw err;
    console.log('MySQL connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API to save form data
app.post('/saveFormData', (req:any, res:any) => {
    const { name, email, password, confirmPassword } = req.body;
    const sql = 'INSERT INTO register (name, email, password, confirmPassword) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, password, confirmPassword], (err:any, result:any) => {
        if (err) throw err;
        res.send('Data saved successfully');
    });
});
app.get('/getRegistrationData',(req:any, res:any) => {
    const sql = 'SELECT email, password  FROM register';
    db.query(sql, (err:any, results:any) => {
        console.log('R4x',results);
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
        } else {
            console.log('Data retrieved successfully');
            res.json(results);
        }
    });
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

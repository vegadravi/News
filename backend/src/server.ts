const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
const mediaStackAPIUrl = 'http://api.mediastack.com/v1/news';
const apiKey = '4876c8da8d1a74d206c16e85ede221cc'; 
import cors from "cors";
const app = express();
app.use(express.json());
let mainDataGet:any = [];
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
    db.query("SELECT * FROM `register`", function (err:string, result:any, fields:any) {
        if (err) throw err;
        mainDataGet = result;
        console.log("Data is show>>",result);
      });
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
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
        } else {
            console.log('Data retrieved successfully');
            console.log('R4x', results);
    console.log('R4x full data mainDataGet>>>',mainDataGet);
             res.json(mainDataGet);
        }
    });
})
//get live api data search home
app.get('api/home', async (req:any, res:any) => {
    console.log('R4x req',req);
    try {
      const response = await axios.get(mediaStackAPIUrl, {
        params: {
          access_key: apiKey,
          keywords: req.query.keywords
        },
      });
      console.log('R4x response', response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// services/formDataService.js
const db = require('../database/database');
const { v4: uuidv4 } = require('uuid'); 
function saveFormData(req:any, res:any) {
  const { name, email, password, confirmPassword } = req.body;
  const userID = uuidv4();
  console.log(userID);
  const sql = 'INSERT INTO register (userID,name, email, password, confirmPassword) VALUES (?, ?, ?, ?)';
  db.query(sql, [userID,name, email, password, confirmPassword], (err:any, result:any) => {
    if (err) throw err;
    res.send('Data saved successfully');
  });
}

function getRegistrationData(req:any, res:any) {
  const sql = 'SELECT email, password FROM register';
  db.query(sql, (err:any, results:any) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).send('Error retrieving data');
    } else {
      console.log('Data retrieved successfully');
      res.json(results);
    }
  });
}

module.exports = {
  saveFormData,
  getRegistrationData,
};

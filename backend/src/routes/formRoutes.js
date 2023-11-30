const express = require('express');
const router = express.Router();
const formDataService = require('../services/formDataService');
const { v4: uuidv4 } = require('uuid');
router.post('/saveFormData', formDataService.saveFormData);
router.get('/getRegistrationData', formDataService.getRegistrationData);

module.exports = router;
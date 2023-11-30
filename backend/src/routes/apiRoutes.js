// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const apiService = require('../services/apiServices');

router.get('/api/home', apiService.getHomeData);

module.exports = router;

const express = require('express');
const router = express.Router();
const authControler = require ('../Controlers/authControler.js');
const authModel = require('../Models/authModel');


router.post('/login', authControler.login);





module.exports = router;
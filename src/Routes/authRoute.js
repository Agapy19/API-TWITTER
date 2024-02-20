const express = require('express');
const router = express.Router();
const authControler = require ('../Controlers/authControler.js');
const authModel = require('../Models/authModel');


// Route de d'inscription
router.post('/signup', authControler.signUp);
// Route de connexion
router.post('/signin', authControler.signIn);




module.exports = router;
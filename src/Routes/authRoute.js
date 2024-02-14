const express = require('express');
const router = express.Router();
const authControler = require ('../Controlers/authControler.js');
const Users = require('../Models/authModel');


router.post("/signup", authControler.post);
router.post("/login",  authControler.post );




module.exports = router;
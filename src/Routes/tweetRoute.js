
const express = require('express');
const {Tweets, tweetControler,  storage} = require('/home/user-15-c1/Documents/PROJET/API TWITTER/src/Controlers/tweetControler.js')
const router = express.Router()
const multer = require('multer')



const upload = multer({ storage: storage })

router.get("/", function (req, res) {
  res.json(Tweets);

});

router.post("/",upload.single('url'), tweetControler.post);

router.delete("/:id", tweetControler.delete );




module.exports = router;
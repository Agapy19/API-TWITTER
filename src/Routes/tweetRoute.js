
const express=  require ('express');
const Tweet = require ('/home/user-15-c1/Documents/PROJET/API TWITTER/src/Models/tweetModel.js')
const router = express.Router()

router.get("/", function (req, res) {
    res.json(Tweet);
  });

module.exports = router;
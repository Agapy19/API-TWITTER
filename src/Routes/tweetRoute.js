
const express = require('express');
const Tweets = require('/home/user-15-c1/Documents/PROJET/API TWITTER/src/Models/tweetModel.js')
const router = express.Router()

router.get("/", function (req, res) {
  res.json(Tweets);

});

router.post("/", (req, res) => {
  const { userid, id, title, body, url, thumbnailUrl, likes, repost } = req.body;
  const tweet = {
    "userid": userid,
    "id": id,
    "title": title,
    "body": body,
    "url": url,
    "thumbnailUrl": thumbnailUrl,
    "likes": likes,
    "repost": repost
  };
  Tweets.push(tweet);
  res.status(201).json(Tweets);

});

router.delete("/", function (req, res) {
  const { userid, id, title, body, url, thumbnailUrl, likes, repost } = req.body;
  Tweets.slice(id, 1);
  res.status(201).json(Tweets);
});




module.exports = router;
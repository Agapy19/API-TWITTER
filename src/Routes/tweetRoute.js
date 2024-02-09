
const express = require('express');
const Tweets = require('/home/user-15-c1/Documents/PROJET/API TWITTER/src/Controlers/tweetControler.js')
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

router.delete("/:id", function (req, res) {
  const index = req.params.id
  const { userid, id, title, body, url, thumbnailUrl, likes, repost } = req.body;
  const tweet={
    userid, id, title, body, url, thumbnailUrl, likes, repost
  }
  Tweets.splice(index, 1);
  res.status(202).json(Tweets);
});




module.exports = router;
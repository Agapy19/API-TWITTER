const multer = require('multer')
const Tweets = [
    {
        "userid": "1",
        "id": "1",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "likes": 0,
        "repost": "2k",
        "retweets": 0
    },
    {
        "userid": "2",
        "id": "2",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "url": "https://via.placeholder.com/600/d32776",
        // "thumbnailUrl": "https://via.placeholder.com/150/d32776",
        "likes": 0,
        "repost": "1k",
        "retweets": 0
    },
    {

        "userid": "3",
        "id": "3",
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
        "like": 0,
        "repost": 30,
        "retweets": 0
    }

]

const tweetControler = {
    post: (req, res) => {
        const tweetId = parseInt(req.params.id);
        const { userid, id, title, body, url, thumbnailUrl, likes, repost, retweets } = req.body;
        const tweet = {
            "userid": userid,
            "id": Tweets.length + 1,
            "title": title,
            "body": body,
            url: req.file.path,
            "thumbnailUrl": thumbnailUrl,
            " likes": likes,
            "repost": repost,
            "retweets": retweets
        };
        Tweets.push(tweet);
        res.status(201).json(Tweets);

    },
    delete: function (req, res) {
        const index = req.params.id
        const { userid, id, title, body, url, thumbnailUrl, likes, repost, retweets } = req.body;
        const tweet = {
            userid, id, title, body, url, thumbnailUrl, likes, repost, retweets
        }
        Tweets.splice(index, 1);
        res.status(202).json(Tweets);
    }
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/Images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

module.exports = { Tweets, tweetControler, storage };
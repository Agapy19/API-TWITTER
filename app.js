const express = require('express');
const tweet = require('./src/Routes/tweetRoute');
const app = express();
const Auth = require('./src/Routes/authRoute.js')
const port = 3002;
app.use(express.json());
app.use('/tweet',tweet);
app.use('/auth',Auth);




// Ecout du port
app.listen(port, () => console.log('mon application est demarrer sur: http://localhost:$(port)'));

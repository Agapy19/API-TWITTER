const express = require('express');
const route = require('./src/Routes/tweetRoute');
const app = express();
const port = 3002;
app.use(express.json());
app.use('/tweet', route);
// Ecout du port
app.listen(port, () => console.log('mon application est demarrer sur: http://localhost:$(port)'));

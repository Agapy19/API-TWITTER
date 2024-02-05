const express=  require ('express');

const app = express();
const port = 3002;

app.get('/', function(req, res) {
    res.send('hello world');
});

// Ecout du port
app.listen(port, () => console.log('mon application est demarrer sur: http://localhost:$(port)'));
   
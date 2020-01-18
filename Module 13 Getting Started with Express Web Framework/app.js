//  This will give us a function for the server
const express = require('express');

//  By convention, we call this server as app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8085);
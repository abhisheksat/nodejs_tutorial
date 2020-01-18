//  This will give us a function for the server
const express = require('express');

//  By convention, we call this server as app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/example', (req, res) => {
    res.send('Hitting Example Route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(8085);
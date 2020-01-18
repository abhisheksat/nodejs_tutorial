const express = require('express');
const path = require('path');
const app =  express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

const people = require('./routes/people');

//  This becomes the context-root of the application
//  The root of the application would now be localhost:port/people
app.use('/people', people);

app.listen(8085);
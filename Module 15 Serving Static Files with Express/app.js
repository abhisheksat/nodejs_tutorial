const express = require('express');

//  We require path module to be able to generate alias for the static folder
//  We want to access files from the static folder but it should display as
//  /public in the browser when that URL pattern is accessed which returns / renders files
//  from the static folder
const path = require('path');
const app = express();

//  This will provide us an alias for the static folder
//  Files rendered from the static folder would display the url as /public
app.use('/public', express.static(path.join(__dirname, 'static')));

//  To display the index.html when root / is hit by the browser
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(8085);
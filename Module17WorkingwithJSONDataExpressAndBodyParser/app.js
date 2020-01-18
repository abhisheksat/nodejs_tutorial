const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//  This will provide us an alias for the static folder
//  Files rendered from the static folder would display the url as /public
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

//  We need the server to use body-parser and be aware about JSON
app.use(bodyParser.json());

//  To display the index.html when root / is hit by the browser
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//  To cater the incoming POST request for the url pattern / (root)
app.post('/', (req, res) => {
    console.log(req.body);
    //  database work goes here

    //  We can send JSON responses now
    //  See this success : true response with developer tools on browser
    res.json({success : true});
});

app.listen(8085);
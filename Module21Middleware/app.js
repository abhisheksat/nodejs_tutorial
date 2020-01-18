const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//  Declaring and Defining a custom middleware
//  This will be executed for every incoming request
//  unless there is one with a specific url pattern
app.use((req, res, next) => {
    
    //  This will be execute before every incoming request
    //  It will print the url and the http request method type
    console.log('This is Generic Middleware');
    console.log(req.url, req.method);
    req.banana = 'banana';    
    //  The next function indicates that middleware processing is finished
    //  The request can now be forwarded to appropriate handler
    next();
});

/*
app.use('/example', (req, res, next) => {
    console.log('This is Example Middleware');
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});
*/

app.get('/', (req, res) => {
    console.log('Added by Middleware : ' + req.banana);
    res.send('MiddleWare');
});

app.listen(8085);
const express = require('express');
const path = require('path');

//  Importing Joi into the application
const Joi = require('joi');

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
    
    //  Validation blueprint / schema
    //  Here we set the validation rules, that the data we receive must follow
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });

    //  Activating the validation
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send('An Error has occurred');
        }
        console.log(result);
        res.send('Successfully POSTed Data');
    })
    //  database work goes here
    //  We can send JSON responses now
    //  See this success : true response with developer tools on browser
    // res.json({success : true});
});

app.listen(8085);
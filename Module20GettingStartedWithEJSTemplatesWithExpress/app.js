const express = require('express');
const path = require('path');
const app = express();

//  This will provide us an alias for the static folder
//  Files rendered from the static folder would display the url as /public
app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

//  To display the index.html when root / is hit by the browser
app.get('/', (req, res) => {
    //  Now no need to send all file location and details
    //  res.sendFile(path.join(__dirname, 'static', 'index.html'));

    //  We have enabled the view engine as ejs
    //  User render function and pass name of the page to be rendered
    //  This name should match with the corresponding file in the views folder
    res.render('index');
});

app.get('/:userQuery', (req, res) => {
    res.render('index', {data: {userQuery: req.params.userQuery,
                                searchResults: ['book1', 'book2', 'book3'],
                                loggedIn: true,
                                username: 'Test User 1'}
    });
});

app.listen(8085);
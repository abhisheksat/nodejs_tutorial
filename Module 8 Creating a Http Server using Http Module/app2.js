const http = require('http');

//  Creating a server
const server = http.createServer((req, res) => {
    
    //   If root url is hit, then this message
    if (req.url === '/') {
        res.write('Hello World from NodeJS');
        res.end();
    } else {
        //  If any URL Path is given, then this message
        res.write('Using some other domain');
        res.end();
    }
});

//  The port on which the server should listen
server.listen('8085');
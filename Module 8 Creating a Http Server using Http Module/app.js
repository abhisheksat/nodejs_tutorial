const http = require('http');

//  Creating a server
const server = http.createServer((req, res) => {
    res.write('Hello World from NodeJS');
    res.end();
});

//  The port on which the server should listen
server.listen('8085');
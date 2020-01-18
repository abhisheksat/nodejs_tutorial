const http = require('http');
const fs = require('fs');

//  When you hit localhost:8085, you will see the example.json
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type' : 'application/json'});
    readStream.pipe(res);
}).listen(8085);
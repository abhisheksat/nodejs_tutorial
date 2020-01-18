const http = require('http');
const fs = require('fs');

//  When you hit localhost:8085, you will see the index.html content rendered
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-type' : 'text/html'});
    readStream.pipe(res);
}).listen(8085);
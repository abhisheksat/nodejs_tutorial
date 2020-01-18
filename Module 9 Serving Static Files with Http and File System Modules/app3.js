const http = require('http');
const fs = require('fs');

//  When you hit localhost:8085, you will see the node.png image
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/node.png');
    res.writeHead(200, {'Content-type' : 'image/png'});
    readStream.pipe(res);
}).listen(8085);
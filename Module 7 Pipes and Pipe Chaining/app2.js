const fs = require('fs');
const zlib = require('zlib');

//  This will return a transform stream
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example3.txt', 'utf8');
const writeStream = fs.createWriteStream('example4.txt.gz');

//  The content will be read from the readStream
//  transformed using gzip, and then written into example4

//  Output will be a .gz compressed folder, if you extract it, it will have
//  a file example4.txt with plain text inside it
readStream.pipe(gzip).pipe(writeStream);
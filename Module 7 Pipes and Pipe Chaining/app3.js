const fs = require('fs');
const zlib = require('zlib');

//  This will return a transform stream
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example4.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

//  The content will be read from the readStream
//  transformed using gunzip, and then written into uncompressed

//  Output will be uncompressed.txt file with content inside it
readStream.pipe(gunzip).pipe(writeStream);
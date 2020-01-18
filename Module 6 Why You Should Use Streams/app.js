const fs = require('fs');

const readStream = fs.createReadStream('./largefile.txt', 'utf8');

//  The data is read in chunks
//  For every data event, a chunk of data is made available which is displayed 
readStream.on('data', (chunk) => {
    console.log(chunk);
});
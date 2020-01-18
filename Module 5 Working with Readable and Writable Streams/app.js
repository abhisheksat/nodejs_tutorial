const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');

//  This loads and reads the file in chunks
readStream.on('data', (chunk) => {
    console.log(chunk);
});
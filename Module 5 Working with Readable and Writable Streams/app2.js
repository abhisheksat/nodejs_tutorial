const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

//  This loads and reads the file in chunks
//  and writes that chunk to example2.txt as it is made available
readStream.on('data', (chunk) => {
    //  console.log(chunk);
    writeStream.write(chunk);
});
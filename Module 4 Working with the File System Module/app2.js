const fs = require('fs');
//  file rename function example
/*
fs.rename('example.txt', 'example2.txt', (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log('File Renamed Successfully!');
    }
});*/

//  Appending data to the file
/*fs.appendFile('example2.txt', 'Some data being appended', (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log('Successfully Appended Data to the file');
    }
});*/

//  Deleting a file
fs.unlink('example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted the file');
    }
})
const fs = require('fs');
// create a file

fs.writeFile('example.txt', "This is an example", (err) => {
    if (err) {
        console.log('Error');
    } else {
        console.log('File Created Successfully!');

        fs.readFile('example.txt','utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        })
    }
});
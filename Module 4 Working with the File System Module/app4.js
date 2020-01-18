const fs = require('fs');

//  Get access to all the files in the directory
fs.readdir('example', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        //  Accessing all the files and unlinking / deleting using
        //  a for loop
        //  For this you should an example folder with files in it
        for (let file of files) {
            fs.unlink('./example/' + file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully Deleted File')
                }
            });
        }
    }
});
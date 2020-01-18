const fs = require('fs');

fs.mkdir('tutorial', (err) => {
    if (err) {
        console.log(err);
    } else {
        
        //  This code to remove a directory
        /*
        console.log('Folder Created Successfully!');
        fs.rmdir('tutorial', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Folder deleted successfully');
            }
        }); 
        */
        
        /*
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully File Created');
            }
        });
        */
    }
});

fs.unlink('./tutorial/example.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        fs.rmdir('tutorial', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Folder deleted successfully');
            }
        });
    }
});
const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {

            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'Your Team Roster has been created!'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile
};
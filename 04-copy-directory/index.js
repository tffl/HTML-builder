const fs = require('node:fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, '/files');
const destFolder = path.join(__dirname, '/files-copy');

fs.mkdir(destFolder, { recursive: true });
const files = fs.readdir(folderPath, { withFileTypes: true });
files.then((files) => {
    files.forEach((file) => {
        fs.copyFile(folderPath + '/' + file.name,
            destFolder + '/' + file.name,
            fs.constants.COPYFILE_EXCL)
    })
})
const fs = require('node:fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, '/files');
const destFolder = path.join(__dirname, '/files-copy');

fs.mkdir(destFolder, { recursive: true });
const filesToDelete = fs.readdir(destFolder, { withFileTypes: true });
filesToDelete.then((files) => {
    if (files.length === 0) {
        return
    }
    files.forEach((file) => {
        fs.unlink(destFolder + '/' + file.name);
    })
})


const files = fs.readdir(folderPath, { withFileTypes: true });
files.then((files) => {
    files.forEach((file) => {
        fs.copyFile(folderPath + '/' + file.name,
            destFolder + '/' + file.name,
            fs.constants.COPYFILE_EXCL)
    })
})
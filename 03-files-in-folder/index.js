const fs = require('node:fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, '/secret-folder');

function removeFileExt(name) {
    const result = name.split('.').slice(0, -1).join('.');
    return result;
}

const files = fs.readdir(folderPath, { withFileTypes: true });
files.then((files) => {
    files.forEach((file) => {
        if (file.isFile()) {
            const fileName = removeFileExt(file.name);
            const fileExt = path.extname(file.name);
            fs.stat(folderPath + '/' + file.name).then((stats) => {
                const fileSize = (stats.size / 1024).toFixed(2);
                console.log(`${fileName} - ${fileExt} - ${fileSize}kb`);
            })
        }
    })
})
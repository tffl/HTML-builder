const fs = require('node:fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, '/files');
const destFolder = path.join(__dirname, '/files-copy');

fs.mkdir(destFolder, { recursive: true });
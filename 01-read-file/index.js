
const path = require('path');
const fs = require('fs');
const { stdout } = require('process');
const fileLocation = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(fileLocation, 'utf-8');
readStream.on('data', function (chunk) { stdout.write(chunk); });
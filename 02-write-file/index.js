const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');

const fileLocation = path.join(__dirname, 'text.txt');
fs.appendFile(fileLocation, '', (err) => { if (err !== null) { console.log(err) } })

const rl = readline.createInterface(stdin, stdout);
const writeStream = fs.createWriteStream(fileLocation, 'utf-8');
rl.write('Enter the text to append to file and press Enter\nctrl+c or write "exit" to exit\n');
process.on('exit', () => { rl.write('Closing the app...') });

rl.on('line', (line) => {
    if (line === 'exit') {
        process.exit(0);
    }
    writeStream.write(line + "\n");
});
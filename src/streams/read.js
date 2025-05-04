
import process from "node:process"
import fs from "node:fs"

const read = async () => {
    // Write your code here
    // read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into

    const file_path = 'src/streams/files/fileToRead.txt';

    const stream = fs.createReadStream(file_path, { encoding: 'utf8' });
    stream.on('error', (error) => {
        console.error(`Ошибка при чтении файла: ${error.message}`);
    });
    stream.pipe(process.stdout);
};

await read();
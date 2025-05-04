import fs from "node:fs/promises"

const read = async () => {
    // Write your code here
    // read.js - implement function that prints content of the fileToRead.txt
    // into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

    const file_to_read = "src/fs/files/fileToRead.txt"
    fs.readFile(file_to_read, { encoding: 'utf8' }).then(content => {
        console.log(content);
    }).catch(() => {
        throw Error("FS operation failed");
    })

};

await read();
import { promises as fs } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    // Write your code here
    // calcHash.js - implement function that calculates SHA256 hash for file
    // fileToCalculateHashFor.txt and logs it into console as

    const file_path = "src/hash/files/fileToCalculateHashFor.txt";
    fs.stat(file_path).then(() => {
            fs.readFile(file_path).then(file_buffer => {
                const hash = createHash('sha256').update(file_buffer).digest('hex');
                console.log(hash);
            });
    }).catch(error => {
        console.log("error during reading the file");
    });
};

await calculateHash();
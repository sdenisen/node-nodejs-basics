import fs from "node:fs"

const write = async () => {
    // Write your code here
    // write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

    const file_path = "src/streams/files/fileToWrite.txt";
    fs.access(file_path, fs.constants.F_OK, (err)=>{
        const write_stream = fs.createWriteStream(file_path);

        process.stdin.pipe(write_stream);

        process.on('SIGINT', () => {
            console.log('\n stop signal received!');
            writeStream.end();
            process.exit();
        });

    })
};

await write();
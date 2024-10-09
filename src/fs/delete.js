import fs from "node:fs/promises"

const remove = async () => {
    // Write your code here
    // delete.js - implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

    const file_to_remove = "src/fs/files/fileToRemove.txt"
    fs.stat(file_to_remove).catch(error => {
        throw Error("FS operation failed");
    });

    fs.unlink(file_to_remove);
};

await remove();
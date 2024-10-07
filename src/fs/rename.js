import fs from "node:fs/promises"

const rename = async () => {
    // Write your code here
    // rename.js - implement function that renames file wrongFilename.txt
    // to properFilename with extension .md
    // (if there's no file wrongFilename.txt or wrongFilename.txt already exists
    // Error with message FS operation failed must be thrown)

    const old_file_name = "src/fs/files/wrongFilename.txt"
    const new_file_name = "src/fs/files/wrongFilename.txt"

    fs.stat(old_file_name).catch(error => {
        throw Error("FS operation failed");
    })

    fs.stat(new_file_name).then(() => {
        throw Error("FS operation failed");
    }).catch(error => {
        if(error.code !== 'ENOENT'){
            Promise.reject(error)
        }
    });

    fs.rename(old_file_name, new_file_name)

};

await rename();
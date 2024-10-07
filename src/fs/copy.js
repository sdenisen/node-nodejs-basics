import fs from 'node:fs/promises'

const copy = async () => {
    // Write your code here
    //copy.js - implement function that copies folder files files with all its content into folder
    // files_copy at the same level (if files folder doesn't exists or files_copy has already been created
    // Error with message FS operation failed must be thrown)
    const init_directory = "src/fs/files"
    const destination_directory =  "src/fs/files_copy"

    fs.stat(init_directory).catch(error => {
        throw Error("FS operation failed")
    });

    fs.stat(destination_directory).then(() => {
        throw Error("FS operation failed")
    }).catch(error => {
        if (error.code !== "ENOENT"){
            Promise.reject(error);
        }
    });

    fs.cp(init_directory, destination_directory, {recursive: true}).then(() => {
        console.log("Copy complete successful");
    }).catch(error => {console.log(error.message)});

};

await copy();

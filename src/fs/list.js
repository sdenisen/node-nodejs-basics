import fs from "node:fs/promises"
const list = async () => {
    // Write your code here
    // list.js - implement function that prints all array of filenames from files folder into
    // console (if files folder doesn't exists Error with message FS operation failed must be thrown)

    const folder_of_files = "src/fs/files"

    fs.readdir(folder_of_files).then(files => {
        files.forEach( f => {console.log(f)});
    }).catch(() => {
        throw Error("FS operation failed");
    })

};

await list();
import fs from 'node:fs/promises';
// const fs = requre('fs').promises;

const create = async () => {
    // Write your code here
    // create.js - implement function that creates new file fresh.txt
    // with content I am fresh and young inside of the files folder
    // (if file already exists Error with message FS operation failed must be thrown)

    const FILE_PATH = 'src/fs/files/fresh.txt';

    const isFileExist = async (path) => {
        fs.stat(path).then(() => {
            throw new Error ("FS operation failed");
        }).catch(error => {
            if (error.code === 'ENOENT')
                return false;
            Promise.reject(error);
        })
    }

    const writeFreshFile = async (path) => {
        fs.writeFile(path, 'I am fresh and young').then(() => {
            console.log("File create")
        }).catch(error=>{
            console.error(e.message);
        });
    }

    try {
        if ( !(await isFileExist(FILE_PATH)) ) {
            await writeFreshFile(FILE_PATH);
        }
    }catch (e) {
        console.log(e.message);
    }
};

await create();
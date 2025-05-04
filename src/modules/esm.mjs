import path from 'node:fs';
import { release, version } from 'node:os';
import { createServer } from 'node:http';
import './files/c.cjs'
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { sep, dirname } from 'path';



const random = Math.random();

let unknownObject;
let json_module_name;
if (random > 0.5) {
    json_module_name='src/modules/files/a.json';
} else {
    json_module_name='src/modules/files/b.json';
}

const data = await readFile(json_module_name, 'utf-8');
unknownObject = JSON.parse(data)

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);

const __filename = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${__filename}`);

console.log(`Path segment separator is "${sep}"`);

const __dirname = dirname(__filename);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default [unknownObject, myServer];


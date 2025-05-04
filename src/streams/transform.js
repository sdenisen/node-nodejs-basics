import { Transform } from 'stream';

const transform = async () => {
    // Write your code here
    // transform.js - implement function that reads data from process.stdin,
    // reverses text using Transform Stream and then writes it into process.stdout

    const reverseText = (text) => text.split('').reverse().join('');

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
        try {
            const reversed = reverseText(chunk.toString());
            this.push(reversed + '\n');
            callback();
        } catch (error) {
            callback(error);
        }
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

};

await transform();
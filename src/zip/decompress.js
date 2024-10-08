import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
    // Write your code here
    // decompress.js - implement function that decompresses archive.gz
    // back to the fileToCompress.txt with same content as before compression using zlib and Streams API

    const archive_path = 'src/zip/files/archive.gz';
    const output_path = 'src/zip/files/fileAfterDecompression.txt';

    const sourceStream = fs.createReadStream(archive_path);
    const gunzipStream = zlib.createGunzip();
    const destinationStream = fs.createWriteStream(output_path);
    await pipeline(sourceStream, gunzipStream, destinationStream);
};

await decompress();
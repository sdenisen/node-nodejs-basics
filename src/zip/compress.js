import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
    // Write your code here
    // compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API

    const file_path = 'src/zip/files/fileToCompress.txt';

    const archive_path = 'src/zip/files/archive.gz';

    await pipeline(
      fs.createReadStream(file_path),
      zlib.createGzip(),
      fs.createWriteStream(archive_path)
    );
};

await compress();
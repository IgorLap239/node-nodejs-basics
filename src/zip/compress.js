import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const fileReadStream = createReadStream("files/fileToCompress.txt");
    const gzipStream = createGzip();
    const archiveWriteStream = createWriteStream("files/archive.gz");

    fileReadStream.pipe(gzipStream).pipe(archiveWriteStream);
};

await compress();
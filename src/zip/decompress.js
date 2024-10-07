import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const archiveReadStream = createReadStream("files/archive.gz");
    const gunzipStream = createGunzip();
    const fileWriteStream = createWriteStream("files/fileToCompress.txt");

    archiveReadStream.pipe(gunzipStream).pipe(fileWriteStream);
};

await decompress();
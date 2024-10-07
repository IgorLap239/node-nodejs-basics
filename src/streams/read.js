import fs from 'fs';

const read = async () => {
    const readStream = fs.createReadStream("files/fileToRead.txt", {
        encoding: 'utf8',
        highWaterMark: 1024
    });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
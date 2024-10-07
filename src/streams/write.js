import fs from 'fs';

const write = async () => {
    const writeStream = fs.createWriteStream("files/fileToWrite.txt", {
        encoding: 'utf8'
    });

    process.stdin.pipe(writeStream);

    process.stdin.on('end', () => {
        console.log('\nДанные записаны в файл');
    });
};

await write();
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const fileReadStream = createReadStream("files/fileToCalculateHashFor.txt");

    fileReadStream.pipe(hash);

    fileReadStream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`${hexHash}`);
    });
};

await calculateHash();
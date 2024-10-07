import fs from "fs";

const create = async () => {
    if (fs.existsSync('files/fresh.txt')) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFile('files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw new Error('FS operation failed');
        });
    }
};

await create();
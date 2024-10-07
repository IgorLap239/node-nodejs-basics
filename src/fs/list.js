import fs from "fs";

const list = async () => {
    fs.readdir('./files', (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(files);
        }
    });
};

await list();
import fs from "fs";
import path from "path";

const copy = async () => {
    if (!fs.existsSync('files')) {
        throw new Error('FS operation failed');
    }
    if (fs.existsSync('files_copy')) {
        throw new Error('FS operation failed');
    }
    fs.mkdirSync('files_copy');
    fs.readdirSync('files').forEach(function(file) {
        var curSrc = path.join('files', file);
        if (fs.lstatSync(curSrc).isDirectory()) {
        copyFolder(curSrc, path.join('files_copy', file));
        } else {
        fs.copyFileSync(curSrc, path.join('files_copy', file));
        }
    });
};

await copy();

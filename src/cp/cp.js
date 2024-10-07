import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./files/script.js', ...args], {
        stdio: ['inherit', 'pipe', 'inherit', 'ipc']
    });

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    process.stdin.pipe(child);

    return;
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);

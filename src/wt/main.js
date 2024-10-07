import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];
    const results = [];
  
    for (let i = 0; i < numCores; i++) {
      const worker = new Worker('./worker.js');
      workers.push(worker);
      worker.postMessage(i + 10);
      worker.on('message', (event) => {
        results.push(event);
        if (results.length === numCores) {
          console.log(results);
        }
      });
    }
};

await performCalculations();
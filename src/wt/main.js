import os from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    // Write your code here
    /*
    * main.js - implement function that creates number of worker threads
    * (equal to the number of host machine logical CPU cores) from file worker.js
    * and able to send data to those threads and to receive result of the computation from them.
    * You should send incremental number starting from 10 to each worker.
    * For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker,
    * 11 to second worker, 12 to third worker, 13 to fourth worker.
    * After all workers will finish, function should log array of results into console.
    * The results are array of objects with 2 properties:
    * status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
    * data - value from worker in case of success or null in case of error in worker
    * */

    const worker_script = './src/wt/worker.js';
    const cpu_count = os.cpus().length;

    const runWorker = (worker_data) => {
        return new Promise((resolve, reject) => {
        const worker = new Worker(worker_script, { workerData: worker_data });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
        })
        });
    };


    let start_number = 10;
    const worker_promises = [];

    for (let i = 0; i < cpu_count; i++, start_number++) {
    worker_promises.push(
      runWorker(start_number).catch((err) => {
        console.error("error in worker with data", err);
        return null; //
      })
    );
    }

    try {
        const results = await Promise.all(worker_promises);
        console.log('worker results:', results);
    } catch (error) {
        console.error('common error', error);
    }

};

await performCalculations();
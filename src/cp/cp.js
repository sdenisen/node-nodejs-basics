import child_process from "node:child_process"

const spawnChildProcess = async (args) => {
    // Write your code here
    // cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file
    const child_name = './src/cp/files/script.js'
    const child = child_process.fork(child_name, args);
    child.send(process.stdin)
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(  ["someArgument1", "someArgument2",] );

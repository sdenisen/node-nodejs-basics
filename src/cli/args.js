const parseArgs = () => {
    // Write your code here
    // args.js - implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2, you don't need to validate it)
    // and prints them to the console in the format propName is value, prop2Name is value2

    const args = process.argv.slice(2);
    const result = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            let value = true;
            if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
                value = args[i + 1];
                i++;
            }
            result.push(`${key} is ${value}`);
        }
    }
    console.log(result.join(', '));
};

parseArgs();
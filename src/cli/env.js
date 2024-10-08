const parseEnv = () => {
    // Write your code here
    // env.js - implement function that parses environment variables with prefix RSS_
    // and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

    const result = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    console.log(result);
};

parseEnv();
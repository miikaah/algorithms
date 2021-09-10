// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
//
// Finding prime numbers

import { strict as assert } from "assert";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "test-data-sieve-of-erastothenes.json"))
);

const testCases = [
    {
        amount: 8,
        expected: [2, 3, 5, 7, 11, 13, 17, 19],
    },
    {
        amount: 1000,
        expected: data,
    },
];

const sieveOfErastothenes = ({ amount }) => {
    const primes = [2];

    for (let i = 3; i < Infinity; i++) {
        let isPrime = true;
        for (let j = 0; j < primes.length; j++) {
            if (i % primes[j] === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }

        if (primes.length === amount) {
            break;
        }
    }

    return primes;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = sieveOfErastothenes(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(result);

    assert.deepEqual(result, test.expected);
});

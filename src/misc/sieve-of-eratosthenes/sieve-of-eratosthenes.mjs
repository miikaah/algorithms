// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
//
// Finding prime numbers

import { strict as assert } from "assert";
import fs from "fs";
import path from "path";

let __dirname = path.dirname(new URL(import.meta.url).pathname);

// NOTE: Are you fucking kidding me?
//       See: https://github.com/nodejs/node/issues/23026
if (process.platform === "win32") {
    __dirname = __dirname.replace("/", "");
}

const testCases = [
    {
        amount: 8,
        expected: () => [2, 3, 5, 7, 11, 13, 17, 19],
    },
    {
        amount: 1000,
        expected: () =>
            JSON.parse(
                fs.readFileSync(path.join(__dirname, "test-data-sieve-of-eratosthenes.json"))
            ),
    },
];

const sieveOfEratosthenes = ({ amount }) => {
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

// Slice for easy testing of a subset of tests
testCases.slice(0, testCases.length).forEach((test) => {
    const start = Date.now();
    const result = sieveOfEratosthenes(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory  rss: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(`Memory heap: ${process.memoryUsage().heapTotal / 1000000} MB`);
    console.log(result);

    assert.deepEqual(result, test.expected());
});

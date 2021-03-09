// Weird Algorithm
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. For example, the sequence for n=3 is as follows:
// 3→10→5→16→8→4→2→1
//
// Your task is to simulate the execution of the algorithm for a given value of n.
//
// Input
//
// The only input line contains an integer n.
//
// Output
//
// Print a line that contains all values of n during the algorithm.
//
// Constraints
// 1≤n≤106
// Example
//
// Input:
// 3
//
// Output:
// 3 10 5 16 8 4 2 1

import { strict as assert } from "assert";

const testCases = [
    {
        input: 3,
        expected: [3, 10, 5, 16, 8, 4, 2, 1],
    },
];

const weirdAlgorithm = ({ input: n }) => {
    const ints = [];

    ints.push(n);
    while (n !== 1) {
        if (!(n % 2)) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        ints.push(n);
    }

    return ints;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = weirdAlgorithm(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(result);

    assert.deepEqual(test.expected, result);
});

// https://cses.fi/alon/task/1094
//
// Increasing Array
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element.
//
// On each move, you may increase the value of any element by one. What is the minimum number of moves required?
//
// Input
//
// The first input line contains an integer n: the size of the array.
//
// Then, the second line contains n integers x1,x2,…,xn: the contents of the array.
//
// Output
//
// Print the minimum number of moves.
//
// Constraints
// 1≤n≤2⋅105
// 1≤xi≤109
// Example
//
// Input:
// 5
// 3 2 5 1 7
//
// Output:
// 5

import { strict as assert } from "assert";

const testCases = [
    {
        input: [3, 2, 5, 1, 7],
        expected: 5,
    },
];

const increasingArray = ({ input }) => {
    let counter = 0;

    for (let i = 1; i < input.length - 1; i++) {
        while (input[i - 1] > input[i]) {
            input[i] = input[i] + 1;
            counter++;
        }
    }

    return counter;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = increasingArray(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(result);

    assert.deepEqual(test.expected, result);
});

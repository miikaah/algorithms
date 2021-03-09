// https://cses.fi/alon/task/1092
//
// Two Sets
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// Your task is to divide the numbers 1,2,…,n into two sets of equal sum.
//
// Input
//
// The only input line contains an integer n.
//
// Output
//
// Print "YES", if the division is possible, and "NO" otherwise.
//
// After this, if the division is possible, print an example of how to create the sets. First, print the number of elements in the first set followed by the elements themselves in a separate line, and then, print the second set in a similar way.
//
// Constraints
// 1≤n≤106
// Example 1
//
// Input:
// 7
//
// Output:
// YES
// 4
// 1 2 4 7
// 3
// 3 5 6
//
// Example 2
//
// Input:
// 6
//
// Output:
// NO

import { strict as assert } from "assert";

const testCases = [
    {
        input: 6,
        expected: "NO",
    },
    {
        input: 7,
        expected: 14,
    },
    {
        input: 8,
        expected: 18,
    },
    {
        input: 9,
        expected: "NO",
    },
    {
        input: 10,
        expected: "NO",
    },
    {
        input: 11,
        expected: 33,
    },
    {
        input: 12,
        expected: 39,
    },
    {
        input: 13,
        expected: "NO",
    },
    {
        input: 1000000,
        expected: 250000250000,
    },
];

console.log([1, 3, 5, 7].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6].reduce((acc, i) => acc + i, 0));
console.log([1, 3, 5, 7].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6, 8].reduce((acc, i) => acc + i, 0));
console.log([1, 3, 5, 7, 9].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6, 8].reduce((acc, i) => acc + i, 0));
console.log([1, 3, 5, 7, 9].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6, 8, 10].reduce((acc, i) => acc + i, 0));
console.log([1, 3, 5, 7, 9, 11].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6, 8, 10].reduce((acc, i) => acc + i, 0));
console.log([1, 3, 5, 7, 9, 11].reduce((acc, i) => acc + i, 0));
console.log([2, 4, 6, 8, 10, 12].reduce((acc, i) => acc + i, 0));
console.log("------------------");
console.log([1, 2, 3, 4, 5, 6].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((acc, i) => acc + i, 0));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].reduce((acc, i) => acc + i, 0));

const twoSets = ({ input }) => {
    const arr = [...Array(input + 1).keys()];
    arr.shift();

    const left = [];
    const right = [];

    arr.forEach((i) => (i % 2 ? left.push(i) : right.push(i)));

    const sum = (ints) => ints.reduce((acc, i) => acc + i, 0);

    let leftSum;
    for (let i = 0; i < arr.length; i++) {
        leftSum = sum(left);
        const diff = leftSum - sum(right);
        const diffAbs = Math.abs(diff);

        // console.log(left);
        // console.log(right);
        // console.log(sum(left), sum(right));
        // console.log("diff", diff);
        if (diff === 0) {
            break;
        }

        if (diffAbs < 2 || isNaN(diff)) {
            return "NO";
        }

        if (diff > 0) {
            const n = left.indexOf(diff / 2);
            // console.log("nl", n);

            if (n > -1) {
                right.push(left[n]);
                left.splice(n, 1);
                continue;
            }

            const swap = left[i + 1];
            left[i + 1] = right[i];
            right[i] = swap;
        } else {
            const n = right.indexOf(diffAbs / 2);
            // console.log("nr", n);

            if (n > -1) {
                left.push(right[n]);
                right.splice(n, 1);
                continue;
            }

            const swap = right[i + 1];
            right[i + 1] = left[i];
            left[i] = swap;
        }
    }

    // console.log(left, right);
    return leftSum;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = twoSets(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log("Result:", result);

    assert.deepEqual(result, test.expected);
});

// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Hard
//
// Given two sorted arrays arr1[] and arr2[] of sizes N and M in non-decreasing order.
// Merge them in sorted order without using any extra space.
// Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
//
// Example 1:
//
// Input:
// N = 4, arr1[] = [1 3 5 7]
// M = 5, arr2[] = [0 2 6 8 9]
// Output:
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]
// Explanation: After merging the two
// non-decreasing arrays, we get,
// 0 1 2 3 5 6 7 8 9.
//
// Example 2:
//
// Input:
// N = 2, arr1[] = [10, 12]
// M = 3, arr2[] = [5 18 20]
// Output:
// arr1[] = [5 10]
// arr2[] = [12 18 20]
// Explanation: After merging two sorted arrays
// we get 5 10 12 18 20.
//
// Your Task:
// You don't need to read input or print anything.
// You only need to complete the function merge() that takes arr1, arr2, N and M as input
// parameters and modifies them in-place so that they look like the sorted merged array when concatenated.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [
            [1, 3, 5, 7],
            [0, 2, 6, 8, 9],
        ],
        expected: [
            [0, 1, 2, 3],
            [5, 6, 7, 8, 9],
        ],
    },
    {
        input: [
            [10, 12],
            [5, 18, 20],
        ],
        expected: [
            [5, 10],
            [12, 18, 20],
        ],
    },
];

// Okay this uses some memory but it's a lot easier to read
// no extra memory version below ->
const merge = (test) => {
    const { input } = test;
    const [arr1, arr2] = input;
    const n = arr1.length;
    const m = arr2.length;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (arr1[n - 1] < arr2[0]) {
            break;
        }

        for (let i = 0; i < m; i++) {
            if (i + 1 === m) {
                arr2.push(arr1.pop());
                break;
            }
            if (arr2[i] < arr1[n - 1] && arr2[i + 1] > arr1[n - 1]) {
                arr2.splice(i + 1, 0, arr1.pop());
                break;
            }
        }

        for (let i = 0; i < m; i++) {
            if (arr1[i] > arr2[0]) {
                arr1.splice(i, 0, arr2.shift());
                break;
            }
        }
    }

    return [arr1, arr2];
};

testCases.forEach((test) => {
    const [arr1, arr2] = merge(test);
    const [expected1, expected2] = test.expected;
    assert.deepEqual(arr1, expected1);
    assert.deepEqual(arr2, expected2);
});

// Version that doesn't used any extra memory
//
// const merge = ({ input }) => {
//     // eslint-disable-next-line no-constant-condition
//     while (true) {
//         if (input[0][input[0].length - 1] < input[1][0]) {
//             break;
//         }
//
//         for (let i = 0; i < input[1].length; i++) {
//             if (i + 1 === input[1].length) {
//                 input[1].push(input[0].pop());
//                 break;
//             }
//             if (
//                 input[1][i] < input[0][input[0].length - 1] &&
//                 input[1][i + 1] > input[0][input[0].length - 1]
//             ) {
//                 input[1].splice(i + 1, 0, input[0].pop());
//                 break;
//             }
//         }
//
//         for (let i = 0; i < input[1].length; i++) {
//             if (input[0][i] > input[1][0]) {
//                 input[0].splice(i, 0, input[1].shift());
//                 break;
//             }
//         }
//     }
//
//     return input;
// };

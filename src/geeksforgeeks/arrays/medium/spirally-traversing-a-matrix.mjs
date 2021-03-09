// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Medium
//
// Given a matrix of size R*C. Traverse the matrix in spiral form.
//
// Example 1:
//
// Input:
// R = 4, C = 4
// matrix[][] = {{1, 2, 3, 4},
//            {5, 6, 7, 8},
//            {9, 10, 11, 12},
//            {13, 14, 15,16}}
// Output:
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// Explanation:
//
// Example 2:
//
// Input:
// R = 3, C = 4
// matrix[][] = {{1, 2, 3, 4},
//            {5, 6, 7, 8},
//            {9, 10, 11, 12}}
// Output:
// 1 2 3 4 8 12 11 10 9 5 6 7
// Explanation:
// Applying same technique as shown above,
// output for the 2nd testcase will be
// 1 2 3 4 8 12 11 10 9 5 6 7.
//
// Your Task:
// You dont need to read input or print anything.
// Complete the function spirallyTraverse() that takes matrix, R and C as input parameters
// and returns a list of integers denoting the spiral traversal of matrix.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        expected: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
    },
    {
        input: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ],
        expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
];

const traverseRight = (rowIndex, input, ret) => {
    ret.push(...input[rowIndex]);
    input.splice(rowIndex, 1);
};

const traverseDown = (lastIndex, input, ret) => {
    input.forEach((row) => {
        ret.push(row[lastIndex]);
        row.splice(lastIndex, 1);
    });
};

const traverseLeft = (rowIndex, input, ret) => {
    ret.push(...input[rowIndex].reverse());
    input.splice(rowIndex, 1);
};

const traverseUp = (firstIndex, input, ret) => {
    input.reverse().forEach((row) => {
        ret.push(row[firstIndex]);
        row.splice(firstIndex, 1);
    });
    input.reverse();
};

const spirallyTraverse = ({ input }) => {
    const ret = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
        traverseRight(0, input, ret);
        if (!input.length) return ret;
        traverseDown(input[0].length - 1, input, ret);
        if (!input.length) return ret;
        traverseLeft(input.length - 1, input, ret);
        if (!input.length) return ret;
        traverseUp(0, input, ret);
        if (!input.length) return ret;
    }
};

testCases.forEach((test) => assert.deepEqual(spirallyTraverse(test), test.expected));

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

// Attempt 1: I read the instructions as don't use extra memory instead of space
// which doesn't make any sense since javascript uses dynamic arrays
// and doubles an array's space at 2, 4, 8 and so on and since you need _some_
// memory for the for loop counters, but it made me come up with this algorithm that I find neat.
const merge = (test) => {
    const { input } = test;
    const [arr1, arr2] = input;
    const n = arr1.length;
    const m = arr2.length;

    // When the last element of arr1 is smaller than the first element of arr2 the work is complete
    while (arr1[n - 1] >= arr2[0]) {
        // Take the last element of arr1 and place it in the correct index in arr2
        for (let i = 0; i < m; i++) {
            if (arr2[i] < arr1[n - 1] && arr2[i + 1] > arr1[n - 1]) {
                arr2.splice(i + 1, 0, arr1.pop());
                break;
            }
        }

        // Take the first element of arr2 and place it in the correct index in arr1
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

// Attempt 2: If the constraint is that you can't increase the size of the arrays
// the obvious solution is to use swap variables.
//
// How this is supposed to be a hard problem I don't understand
// sinze this what I learned in the first C programming class I ever took
// and it wasn't even in University...
//
// Then again it might be that I just didn't get this question.
// Instructions unclear, carry on.
//
// P.S. That space restriction is pretty stupid since what are we working with here?
// It's all in the memory anyway. ???
//
// P.P.S Ugh, I find this solution garbage compared to the elegance of the first one.
// I'll trade performance for code that's easy to read any day of the week.
const merge2 = (test) => {
    const { input } = test;
    const [arr1, arr2] = input;
    const n = arr1.length;
    const m = arr2.length;
    let swap1, swap2;

    // When the last element of arr1 is smaller than the first element of arr2 the work is complete
    while (arr1[n - 1] >= arr2[0]) {
        // Take the last element of arr1 and place it in the correct index in arr2
        for (let i = 0; i < m; i++) {
            if (arr2[i] < arr1[n - 1] && arr2[i + 1] > arr1[n - 1]) {
                swap1 = { index: i + 1, item: arr1.pop() };
                break;
            }
        }

        // Take the first element of arr2 and place it in the correct index in arr1
        for (let i = 0; i < m; i++) {
            if (arr1[i] > arr2[0]) {
                swap2 = { index: i, item: arr2.shift() };
                break;
            }
        }

        arr2.splice(swap1.index, 0, swap1.item);
        arr1.splice(swap2.index, 0, swap2.item);
    }

    return [arr1, arr2];
};

testCases.forEach((test) => {
    const [arr1, arr2] = merge2(test);
    const [expected1, expected2] = test.expected;
    assert.deepEqual(arr1, expected1);
    assert.deepEqual(arr2, expected2);
});

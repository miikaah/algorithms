// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Medium
//
// The cost of stock on each day is given in an array A[] of size N.
// Find all the days on which you buy and sell the stock so that in between those days your profit is maximum.
//
// Example 1:
//
// Input:
// N = 7
// A[] = {100,180,260,310,40,535,695}
// Output: (0 3) (4 6)
// Explanation: We can buy stock on day
// 0, and sell it on 3rd day, which will
// give us maximum profit. Now, we buy
// stock on day 4 and sell it on day 6.
//
// Example 2:
//
// Input:
// N = 5
// A[] = {4,2,2,2,4}
// Output: (3 4)
// Explanation: We can buy stock on day
// 3, and sell it on 4th day, which will
// give us maximum profit.
//
// Your Task:
// The task is to complete the function stockBuySell() which takes an array A[] and N as input parameters
// and finds the days of buying and selling stock.
// The function must return a 2D list of integers containing all the buy-sell pairs.
// If there is No Profit, return an empty list.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [100, 180, 260, 310, 40, 535, 695],
        expected: [
            [0, 3],
            [4, 6],
        ],
    },
    {
        input: [4, 2, 2, 2, 4],
        expected: [[3, 4]],
    },
];

const findMinIndex = (input) => {
    const { length } = input;

    let min = Number.MAX_SAFE_INTEGER;
    let minIndex;
    for (let i = 0; i < length; i++) {
        const candidate = input[i];
        if (candidate <= min) {
            min = candidate;
            minIndex = i;
        }
    }

    return minIndex;
};

const findMax = (start, input) => {
    const { length } = input;

    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex;
    for (let i = start + 1; i < length; i++) {
        const candidate = input[i];
        if (candidate <= input[start]) {
            break;
        }
        if (candidate >= max) {
            max = candidate;
            maxIndex = i;
        }
    }

    if (!maxIndex) {
        return [];
    }

    for (let i = maxIndex; i >= start; i--) {
        input.splice(i, 1);
    }

    return [start, maxIndex];
};

const stockBuySell = ({ input }) => {
    const ret = [];

    while (input.length) {
        const minStart = findMinIndex(input);
        const opportunity = findMax(minStart, input);
        if (!opportunity.length) {
            break;
        }
        ret.push(opportunity);
    }

    return ret.sort((a, b) => a[0] - b[0]);
};

testCases.forEach((test) => assert.deepEqual(stockBuySell(test), test.expected));

// https://cses.fi/alon/task/2162
//
// Josephus Problem I
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// Consider a game where there are n children (numbered 1,2,…,n) in a circle.
// During the game, every second child is removed from the circle,
// until there are no children left. In which order will the children be removed?
//
// Input
//
// The only input line has an integer n.
//
// Output
//
// Print n integers: the removal order.
//
// Constraints
// 1≤n≤ 2 * 10^5
// Example
//
// Input:
// 7
//
// Output:
// 2 4 6 1 5 3 7

import { strict as assert } from "assert";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const expected10000 = JSON.parse(
    fs.readFileSync(path.join(__dirname, "josephus-problem10000.json"))
);
const expected200000 = JSON.parse(
    fs.readFileSync(path.join(__dirname, "josephus-problem200000.json"))
);

const testCases = [
    {
        input: 7,
        expected: [2, 4, 6, 1, 5, 3, 7],
    },
    {
        input: 15,
        expected: [2, 4, 6, 8, 10, 12, 14, 1, 5, 9, 13, 3, 11, 7, 15],
    },
    {
        input: 10000,
        expected: expected10000,
    },
    {
        input: 200000,
        expected: expected200000,
    },
];

const getMaxHalvings = (length, count = 0) => {
    count++;

    if (length < 1) {
        return count;
    }

    return getMaxHalvings(length / 2, count);
};

const josephus = ({ input }) => {
    const arr = [...Array(input + 1).keys()];
    arr.shift();

    const maxHalvings = getMaxHalvings(arr.length);
    const ret = [];

    let i = 1;
    let offset = 2;
    let overflows = 0;
    let prevIndex = i;
    while (overflows < maxHalvings) {
        if (arr[i]) {
            ret.push(arr[i]);
            i += offset;
            continue;
        }

        if (overflows === 0) {
            i = prevIndex - Math.pow(2, overflows);
        } else {
            i = prevIndex + Math.pow(2, overflows);
        }
        prevIndex = i;
        overflows++;
        offset *= 2;
    }

    return ret;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = josephus(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(result);
    console.log(result.length);

    assert.deepEqual(test.expected, result);
});

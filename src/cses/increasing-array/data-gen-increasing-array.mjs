import fs from "fs";
import path from "path";
import { getRandomInt } from "../../util.mjs";

const n = 2 * Math.pow(10, 5);
console.log("n", n);
const min = 1;
const input = [];

let counter = 0;
for (let i = 3; i < n; i++) {
    if (i % 2) {
        input.push(i);
    } else {
        const rand = getRandomInt(min, i - 1);
        const j = i - rand;
        input.push(j);
        counter += rand - 1;
    }
}

const __dirname = path.dirname(new URL(import.meta.url).pathname);

fs.writeFileSync(
    path.join(__dirname, "test-data-increasing-array.json"),
    JSON.stringify({
        input,
        expected: counter,
    }),
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

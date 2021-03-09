import fs from "fs";
import path from "path";
import { shuffleArray } from "../../util.mjs";

const n = 2 * Math.pow(10, 5);
console.log("n", n);

const input = [...Array(n).keys()];
input.shift();
shuffleArray(input);

const __dirname = path.dirname(new URL(import.meta.url).pathname);

fs.writeFileSync(
    path.join(__dirname, "test-data-collecting-numbers.json"),
    JSON.stringify({
        input,
    }),
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

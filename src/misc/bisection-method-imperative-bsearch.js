const f = (x) => Math.pow(x, 2) - 3;
const g = (x) => x * Math.log(x);
const diff = (x) => f(x) - g(x);
const threshold = Number(process.argv[2]) || 0.001;

const start = Date.now();

const root = (left, right = 4) => {
    while (!(Math.abs(left - right) < threshold)) {
        const mid = (left + right) / 2;

        if (Math.sign(diff(left)) === Math.sign(diff(mid))) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
};

console.log("---------------------------------");
console.log("Imperative binary search solution");
console.log("threshold: ", threshold);
console.log("root: ", root(threshold));
console.log(`time: ${Date.now() - start} milliseconds`);
console.log("---------------------------------");

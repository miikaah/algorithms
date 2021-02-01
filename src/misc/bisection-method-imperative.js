const f = (x) => Math.pow(x, 2) - 3;
const g = (x) => x * Math.log(x);
const threshold = Number(process.argv[2]) || 0.001;

const start = Date.now();

const root = (x) => {
    let y = x;

    while (Math.abs(f(y) - g(y)) > threshold) {
        y = y + threshold;
    }

    return y;
};

console.log("-------------------------");
console.log("Naive imperative solution");
console.log("threshold: ", threshold);
console.log("root: ", root(threshold));
console.log(`time: ${Date.now() - start} milliseconds`);
console.log("-------------------------");

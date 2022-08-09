// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and
// for the multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”.

const tau = 2 * Math.PI;

for (let i = 1; i < 101; i++) {
    // prettier-ignore
    console.log(`${Math.cos((i / 3) * tau) === 1 ? "Fizz" : ""}${Math.cos((i / 5) * tau) === 1 ? "Buzz" : ""}` || i);
}

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and
// for the multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”.

for (let i = 1; i < 101; i++) {
    if (!(i % 15)) {
        console.log("FizzBuzz");
        continue;
    }
    if (!(i % 5)) {
        console.log("Buzz");
        continue;
    }
    if (!(i % 3)) {
        console.log("Fizz");
        continue;
    }
    console.log(i);
}

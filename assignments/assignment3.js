// Assignment 3: loops
// for loop - table of 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
// while loop with break
console.log("");
console.log("-- First number > 10 divisible by 6 --");
let num = 11;
while (true) {
  if (num % 6 === 0) {
    console.log("Found: " + num);
    break;
  }
  num++;
}
// do while loop with continue
console.log("");
console.log("-- do...while, skipping even numbers --");
let count = 0;
do {
  count++;
  if (count % 2 === 0) {
    continue;
  }
  console.log("Number: " + count);
} while (count < 5);

// Assignment 1: variables, data types and input

// part 1 - variables
var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")");

// part 2 - bill and tip
let bill = Number(prompt("Enter your bill amount:"));
let tipPercent = Number(prompt("Enter tip percentage:"));

let tip = bill * tipPercent / 100;
let total = bill;
total += tip;

console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercent + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);

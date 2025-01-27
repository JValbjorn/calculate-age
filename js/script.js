"use strict";

let answer = prompt(`Year of birth`);
let now = new Date();
let currentYear = now.getFullYear();
let parsedAnswer = parseInt(answer);
let age = currentYear - parsedAnswer;
console.log(age);

// 1. Use the `prompt` function to ask the user for their birth year.
// 2. Calculate the person's age using the `new Date()` function to get the current year and `parseInt` to convert user input to a number.
// 3. Display the calculated age using `console.log`.

// console.log(new Date().getFullYear() - parseInt(prompt("What is your birth year?")));
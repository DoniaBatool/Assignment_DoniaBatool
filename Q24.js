"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False
//  result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
//  greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let word1;
let word2;
word1 = "Hello";
word2 = "Helo";
console.log(word1 === word2);
console.log(word1 !== word2);
let word3;
let word4;
word3 = "world";
word4 = "WORLD";
console.log(word3 === word4.toLowerCase());
console.log(word3 !== word4.toLowerCase());
console.log(word3 == word4);
let num1;
let num2;
num1 = 23;
num2 = 43;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 < num2);
let condition1;
let condition2;
condition1 = true;
condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
let fruits;
fruits = ["apple", "mango", "banana", "orange"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("peach"));
console.log(fruits.includes("mango"));
console.log(fruits.includes("watermelon"));

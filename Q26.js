"use strict";
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color is green, print a statement that the player just earned 5 points for 
// shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor;
alienColor = "green";
if (alienColor === "green") {
    console.log("You earned 5 points");
}
else {
    console.log("You earned 10 points");
}
//second version of the program
alienColor = "red";
if (alienColor === "green") {
    console.log("You earned 5 points");
}
else {
    console.log("You earned 10 points");
}
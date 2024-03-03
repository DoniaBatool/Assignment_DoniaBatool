"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
let magicianName;
function show_magicians(mName1, mName2, mName3) {
    function make_great() {
        magicianName = [mName1, mName2, mName3];
        for (let i = 0; i < 3; i++) {
            console.log(`The Great Magician ${magicianName[i]}`);
        }
    }
    make_great();
}
show_magicians("Alpha", "Bravo", "Charlie");

"use strict";
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
//• Start with your program from Exercise 16. Add a new line that prints a message saying 
//that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them 
//know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to 
//make sure you actually have an empty list at the end of your program.
let guestList;
guestList = ["Ali", "Jawwad", "Naqi", "Raza"];
console.log(guestList);
console.log("\nCan invite only two people for dinner\n");
while (guestList.length > 2) {
    let guestsRemoved = guestList.pop();
    console.log("Mr." + guestsRemoved + ", Sorry! cant invite more than two people\n");
}
guestList.map((item) => console.log(`Dear ${item}, You are still invited for dinner\n`));
guestList.pop();
guestList.pop();
console.log(guestList);

"use strict";
//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.
Object.defineProperty(exports, "__esModule", { value: true });
//• Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still
//in your list.
let guestList;
guestList = ["Ali", "Jawwad", "Naqi", "Raza"];
console.log(guestList);
let guestCanNotAttend;
guestCanNotAttend = "Jawwad";
console.log(`Mr.${guestCanNotAttend}, will not be able to attend tonight's dinner from the guest list above`);
let newGuest;
newGuest = "Ahmed";
guestList.splice(1, 1, newGuest);
console.log(`This is the new modified list of guests:`);
console.log(guestList);
guestList.map((item) => console.log(`Mr. ${item}, You are still invited for dinner tonight!`));

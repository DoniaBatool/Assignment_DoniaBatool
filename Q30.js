"use strict";
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to 
// see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let user_Array;
user_Array = ["Admin", "Ahmed", "Arif", "Ali"];
for (let i = 0; i < user_Array.length; i++) {
    if (user_Array[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_Array[i]}, Thankyou for logging in again`);
    }
}

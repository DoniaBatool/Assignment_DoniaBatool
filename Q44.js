"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
let items;
function sandwichItem(...items) {
    console.log('\n"Order Summary"\nItems Included: ');
    if (items.length != 0) {
        items.forEach((items) => console.log(`* ${items}`));
    }
    else {
        console.log("No Items Added.\nPlease add some items to customize your sandwich!");
    }
}
sandwichItem();
sandwichItem("salad", "tomato");
sandwichItem("sausage", "cheese", "olives");
sandwichItem("ketchup", "cucumber");

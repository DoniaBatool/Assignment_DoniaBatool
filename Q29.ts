// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement,such as You really like bananas!
let favourite_fruits:string[]
favourite_fruits=["apple","mango","banana"]

if(favourite_fruits.includes("apple")){
    console.log("You really like apples")
}
if(favourite_fruits.includes("grapes")){
    console.log("You really like grapes")
}
else{
    console.log("grapes are not there in the array ")
}
if(favourite_fruits.includes("mango")){
    console.log("You really like mango")
}
if(favourite_fruits.includes("orange")){
    console.log("You really like orange")
}
else{
    console.log("Orange is not included in your array ")
}
if(favourite_fruits.includes("banana")){
    console.log("You really like banana")
}

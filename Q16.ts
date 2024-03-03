//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
let guestArr: string[]
guestArr=["Ali","Ahmed","Raza"]
guestArr.map((item)=>console.log(item))
console.log("I have found a bigger dinner table and so I will be inviting some more guests to the dinner")

console.log("Adding a guest in the beginning of the array")
let guestBegin:string
guestBegin="Abuzar"
guestArr.unshift(guestBegin)
console.log(guestArr)

console.log("Adding a guest in the middle of the array")
let guestMid:string
guestMid="Miqdad"
guestArr.splice(2,0,guestMid)
console.log(guestArr)

console.log("Adding a guest at the end of the list")
let guestEnd:string
guestEnd="Qamber"
guestArr.push(guestEnd)
guestArr.map((item)=>console.log(item))

guestArr.map((item)=>console.log(`Mr.${item}, You are cordially invited for dinner tonight!`))

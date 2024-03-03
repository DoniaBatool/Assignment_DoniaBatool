//3. Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.




let name : string 
name ="ibAd-ur-rehMan";
let newName1:string = name.toUpperCase();
console.log(newName1);

let newName2 = name.toLowerCase();
console.log(newName2);

let newName3 = name.charAt(0).toUpperCase() + name.slice(1,8).toLowerCase() + name.charAt(8).toUpperCase() +name.slice(9).toLowerCase()
console.log(newName3)

export{}
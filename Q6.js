"use strict";
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
//end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
let person1;
person1 = "\n\n\n\t\tAbdullah\t\t\n\n";
console.log("Name of the person with whitespaces:" + person1);
let person2;
person2 = person1.trim();
console.log("Name of the person after stripping whitespaces:" + person2);

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size="Large",text='"I Love Typescript!"'):void{
    console.log(`The size of the shirt is ${size} & the message printed on it is: ${text}`)
 
}
make_shirt();
make_shirt("Medium")
make_shirt("Small",'"I Love Python!"')
export{}
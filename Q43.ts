// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
    
    let magicianName:string[]
    magicianName=["Alpha","Bravo","Charlie"]
    let newMagicianArray:any

    function show_magicians(magicianName:string[]):void{
         for(let i=0;i<magicianName.length;i++){
            console.log(magicianName)
         }
        }
        
       function make_great(magicianName:string[]):string[]{
        
        newMagicianArray=magicianName.forEach((item)=>console.log(`The Great Magician ${item}`))

            
            return newMagicianArray
               }


console.log("Original Magician:")   
show_magicians(magicianName)
console.log("Great Magician:")   
make_great(magicianName)
 export{}
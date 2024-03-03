// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly

function infoCar(manufacturer: string, model: string, ...extraInfo: [string,string][]): object {
   
    let car: { [key: string]: string } = {
      manufacturer,
      model,
    };
  
    for (let [key, value] of extraInfo) {
      car[key] = value;
    }
  
    return car;
  }
  
  let newCar = infoCar("Tesla", "Model S",["Color","Red"],["Sunroof","True"],["Glass","Tinted"]);
  
  console.log(newCar);
  
// let a = 0.3;
// let b = 0.5;
// const myArray = [0.1, 0.5, 0.9, 0.2];

// //

// const addCalculation = (...allNumbers) => {
//   return allNumbers.reduce((acc, item) => acc + item, 0).toFixed(1);

//   //return (a + b + myArray).toFixed(1);
// };

// console.log(addCalculation(a, b, ...myArray));

//////////////////* NEXT EXERCISE *//////////////////////////////

// const myString = "123px456em789dž";

// const clearString = (myString) => {
//   const singleNumber = myString.match(/[0-9]/g)?.join("");

//   return singleNumber;
// };

// console.log(clearString(myString));

/////////////* NON regex solution */////////////

// const myString = "123px456em789dž```";

// let singleNumber = "";

// for (let i = 0; i < myString.length; i++) {
//   if (myString[i] >= "0" && myString[i] <= 9) {
//     singleNumber += myString[i];
//   }
// }

// console.log(singleNumber);

// console.log(typeof singleNumber);

///////////////* more functional aproach *//////////////////////////

const myString = "123px456em789dž```";

const numberExtractor = Array.from(myString)
  .filter((item) => item >= "0" && item <= "9")
  .join("");

console.log(numberExtractor);

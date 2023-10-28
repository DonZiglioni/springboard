//  ********* Answers to the first section   *******************
// Destructuring Exercise

// What does the following code return/print?

// 1. Outputs 8 and 1846

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// 2. Outputs the remaining objects - { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // ?

// 3. a) "Your name is Alejandro and you like purple", 
// b) "Your name is Melissa and you like green", 
// c) "Your name is undefined and you like green"

// function getUserData({ firstName, favoriteColor = "green" }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // ?
// getUserData({ firstName: "Melissa" }) // ?
// getUserData({}) // ?

//4) Prints the names in the order they are placed in based on their index  ( Maya, Marisa, Chi )

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// 5)  Outputs: "Randrops on roses" first, then outputs "whiskers on kittens", and then
//     outputs an array with the remaining statements

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
// ]

// console.log(raindrops); // ?
// console.log(whiskers); // ?
// console.log(aFewOfMyFavoriteThings); // ?

// 6) This is going to swap the numbers that are in index 1(20) and index 2(30), 
//    and return the same array with the values swapped

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?



//  ********* Answers to the second section   *******************

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.
// ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;
//
// ES2015 Object Destructuring
// /* Write an ES2015 Version */

const { numbers: { a, b } } = obj
//console.log(a, b)

// ES5 Array Swap

var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
//
// ES2015 One-Line Array Swap with Destructuring
// /* Write an ES2015 Version */

[arr[0], arr[1]] = [arr[1], arr[0]]
//console.log(arr);



//
// raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// Enhanced object assignment (same key/value shortcut)


// /*
//   {
//     first: "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }
// */


const raceResults = ([first, second, third, ...rest]) => { return { first, second, third, rest } }

//console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))
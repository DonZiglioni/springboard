const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// function double(arr) {
//     return arr.map(function (val) {
//         return val * 2;
//     });
// }
/*
## **ES2015 Arrow Functions Shorthand**
Refactor the above code to use two arrow functions. Turn it into a one-liner. */

const double = (arr) => arr.map(n => n * 2)

//     Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers) {
//     var squares = numbers.map(function (num) {
//         return num ** 2;
//     });
//     var evens = squares.filter(function (square) {
//         return square % 2 === 0;
//     });
//     return evens;
// }

const squareAndFindEvens = (numbers) => {
    let squares = numbers.map(n => n ** 2)
    let evens = squares.filter(s => s % 2 === 0)
    return evens;
}

// console.log(squareAndFindEvens(numbers));
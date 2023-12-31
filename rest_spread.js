// *****     Rest / Spread Operator Exercises     *****

// In this exercise, you’ll refactor some ES5 code into ES2015.

// Given this function:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

// Refactor it to use the rest operator & an arrow function:
// /* Write an ES2015 Version */

const filterOutOddsTwo = (...nums) => nums.filter(n => n % 2 === 0)
//console.log(filterOutOddsTwo(1, 2, 3, 4, 5, 6, 7, 8, 9))


// *****     findMin     *****
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => Math.min(...nums)
//console.log(findMin(1, 4, 12, -3))

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}
//console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => {
    let doubles = args.map(arg => arg * 2)
    return newArray = [...arr, ...doubles]
}
//console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.
/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers2 = [21, 23, 33, 43, 56, 66, 76, 87, 89, 90]
const person = {
    first: "Frank",
    last: "Azzaro",
    age: 37
}
const animal = {
    size: "Small",
    type: "Penguin",
    isHappy: true
}


const removeRandom = (items) => {
    let newArray = [...items]
    let randomInt = Math.floor(Math.random() * newArray.length + 1)
    newArray.splice(randomInt, 1)
    return newArray
}
//console.log(removeRandom(numbers))

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => [...array1, ...array2]
//console.log(extend(numbers, numbers2))


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val }
}
//console.log(addKeyVal(person, "happy", true));

/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
    let updatedObject = { ...obj }
    delete updatedObject[key]
    return updatedObject
}
//console.log(removeKey(person, 'age'))
/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}
//console.log(combine(person, animal));


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    let newData = { [key]: val }
    return { ...obj, ...newData }
}
//console.log(update(person, "age", 112))
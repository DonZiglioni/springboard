// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?
// new Set([1,1,2,2,3,4])

// Answer - { 1, 2, 3, 4 }

// Quick Question #2
// What does the following code return?
// [...new Set("referee")].join("")

// Answer - "ref"

// Quick Questions #3
// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// Answer - a map with the 'size' of 2,
// (
// [1,2,3] => true
// [1,2,3] => false
// )


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// const hasDuplicate = (arr) => {
//     let removeDupes = new Set(arr)
//     if (removeDupes.size === arr.length) {
//         return false
//     }
//     return true
// }
//console.log(hasDuplicate([1, 3, 2, 1])) // true
//console.log(hasDuplicate([1, 5, -1, 4])) // false

//
// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

// const vowelCount = (str) => {
//     let aCount = 0;
//     let eCount = 0;
//     let iCount = 0;
//     let oCount = 0;
//     let uCount = 0;
//     let spreadString = [...str]
//     for (let letter of spreadString) {
//         switch (letter) {
//             case "a":
//                 aCount++
//                 break;
//             case "e":
//                 eCount++
//                 break;
//             case "i":
//                 iCount++
//                 break;
//             case "o":
//                 oCount++
//                 break;
//             case "u":
//                 uCount++
//                 break;
//             default:
//                 break;
//         }
//     }

//     let myMap = new Map()
//     myMap.set('a', aCount)
//     myMap.set('e', eCount)
//     myMap.set('i', iCount)
//     myMap.set('o', oCount)
//     myMap.set('u', uCount)
//     return myMap
// }

//console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
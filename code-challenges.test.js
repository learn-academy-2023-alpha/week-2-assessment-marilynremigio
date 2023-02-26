// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
        expect(divByThree(object1)).toEqual("15 is divisible by three")
        expect(divByThree(object2)).toEqual("0 is divisible by three")
        expect(divByThree(object3)).toEqual("-7 is not divisible by three")
    })
 })
//   ReferenceError: divByThree is not defined

// b) Create the function that makes the test pass.

const object1 = {number: 15} 
// // Expected output: "15 is divisible by three"
const object2 = {number: 0}
// // Expected output: "0 is divisible by three"
const object3 = {number: -7}
// // Expected output: "-7 is not divisible by three

// Pseudo code:
// - Create a function named divByThree
// - Use object deconstruction to access the number value inside the object
// - Input: take in an object as an argument called object
// - Use conditional statements if/else: 
    // -If the number divided by 3 has a 0 remainder, use string interpolation and return '<number> is divisible by three'
    // -Else if the number divided by 3 does not have a 0 remainder, use string interpolation and return '<number> is not divisible by three'
// - Output: a string with appropriate response


const divByThree = (object) => {
    const { number } = object
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else if (number % 3 !== 0) {
        return `${number} is not divisible by three`
    } else {
        return "error"
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
 // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("wordCapitalizer", (array) => {
      it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(wordCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
//    ReferenceError: wordCapitalizer is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// - Create a function named wordCapitalizer
// - Input: an array of strings 
// - Iterate over the array using HOF .map 
// - With each value, access the first letter by taking the index of 0 and .toUpperCase() to capitalize the first letter of each string, then concatenate to the remainder of the word using .substring()
// - Output: an array with all of the strings capitalized

const wordCapitalizer = (array) => {
    return array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelFinder", (string) => {
    it("takes in a string and logs the index of the first vowel", () => {
      expect(vowelFinder(vowelTester1)).toEqual(1)
      expect(vowelFinder(vowelTester2)).toEqual(0)
      expect(vowelFinder(vowelTester3)).toEqual(2)
  })
})
// ReferenceError: vowelFinder is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
// - Create a function named vowelFinder
// - Input: takes in a string 
// - Declare const variable called vowels assigned to an array of vowel letters (each a string)
// - Iterate over the string using a for loop
// - Use conditional statement if and .includes() to check each index of the string for a vowel letter
// - Output: return the index of the first vowel found in the string


const vowelFinder = (string) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i=0; i < string.length; i++) { 
        if (vowels.includes(string[i])) {
            return i
        }  
    }
}
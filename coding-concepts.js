// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", " ", "2", "0", "2", "3"]
// b) Verify and explain: My initial answer was correct because using the .split("") mutator method on the string cohort converts it into an array, with each character as its own string

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: My initial answer "undefined" is the correct answer because the function is missing a return. It should include "return" right before `Hello, ${name}!`

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Using the HOF .map, this function iterates over each number in the array and returns an array of the same length with all the numbers multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Using the HOF .filter, this function iterates through the array and filters out the numbers that do not have a 0 remainder when divided by 2. Then it pushes all the odd numbers into a new array and returns the array of only odd numbers

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: "Javascript" gets printed because we can access the values inside the object myCodingSkills by using dot notation and referencing a key value. In this case we are accessing the languages key at the 0 index, which is the first value in the array- "Javascript"
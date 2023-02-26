# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an argument is that they are used in a function in different ways. A function takes in an argument and performs something on it and the parameter acts as a label for the argument. An example of this would be if a function was taking in an array of numbers [1, 2 ,3] as the argument then the parameter could be "array", while the argument is the full array of numbers [1, 2, 3]. The parameter can be anything, but it is good practice to describe the specific data that's being taken in.

Researched answer: A parameter is a variable that is created inside of a function and belongs to that function. The parameter is assigned to an argument which holds the physical data to be passed inside of the parentheses of the function invocation. The parameter may be called on multiple times in a function, which then represents the values of the argument and acts as a placeholder each time. Multiple arguments can be passed through one function, which means there must be separate parameters for each argument. 


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined parameters that JavaScript built-in method .map() takes in are value, index, and array. The value parameter is required, but index and array are optional parameters.

Researched answer: The Javascript High Order Function .map() has 3 built-in parameters. The order of these parameters are important and must stay the same. The first and only required parameter is the current value. Optional parameters the .map function can take in are the index and the array that the high order function was called on. More than one argument can pass through .map() as long as it has a value parameter. The specific order it must follow is value, then index, then the array.


3. What is the difference between map and filter?

Your answer: The main difference between map and filter is that .map is a high order function used to modify the elements in an array and return an array with the same length as the inputted one. The high order function .filter iterates through an array and only returns the elements that meet a certain condition in a shortened array. 

Researched answer: High order function .map will display each value in a given array modified, whereas .filter narrows down the values in a given array based on a built-in if statement and only returns a subset of the array. When using .map, you cannot return a subset of an array, as it will output an array with the same number of indexes as was inputted. 

1. What is iteration?

Your answer: Iteration is the process of running a block of code over and over until a condition is met. Examples of iteration are conditional if/else statements, for loops, or high order functions. 

Researched answer: Iteration is a significantly used concept in web development and programming because it allows a computer to problem solve, find solutions, and execute necessary behaviors. Specific data types that iteration is commonly used on are strings and arrays because they both have a length property which enables functions to act on their elements or individual values one by one. In a for loop iteration, there is a starting location, or starting index, an ending index, and an increment to follow until a condition is met. With conditional statements if/else, logic is performed on a condition until the condition is true. Else if statements include additional conditions and logic to be tested. Iteration is used in High Order Functions by taking a function as an argument and using built-in conditional statements. The same process of going through the code sequence in order to complete an action occurs with high order functions.


1. What is the difference between a function and a method?

Your answer: The difference between a function and a method is that a function has an input to perform an action on, then returns an output. A method is the process used on an input in order to deliver a certain output. Functions are used to solve problems and methods are the helpful ways to find solutions. 

Researched answer: A JavaScript function is a block of code created to execute a certain task with the ability to take in data, operate on the data, and output data. On the other hand, the JavaScript method is an object property that cannot live on its own like a function can, and does the operating on passed through data. A function can be referred to by the name it's given, while a method uses dot notation or square bracket notation to call on the name of its object and name of the method. For example, a function can be called "myFunction" and a method would be used inside of "myFunction" like "value.toUpperCase()". The method itself is .toUpperCase(), which takes a value and upcases the character. Methods can be accessor or mutator methods which means they can get data (accessor) or change data (mutator). 


6. STRETCH: What is hoisting in JavaScript?

Your answer: I've never heard the term "hoisting" in JavaScript before, but if I were to give an educated guess, then I think hoisting in JavaScript means some way of pulling or retreiving information or data from either a remote location or for just a certain amount of time. 

Researched answer: Hoisting in JavaScript refers to the process where functions, variables, or classes move up to the beginning of the sequence, prior to execuding code. By default, Javascript follows hoisting, so an undeclared variable will return an error. Hoisting is important because it enables developers to call on functions before they appear in the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: They are the outline for objects. They can be used and changed over again, similar to functions. In order to make and access the data within a class, there are three key words to use: constructor, this, and new. Syntax for classes follow PascalCase which means the first letter is capitalized, remainder of the word lowercase, then first letter of any next word is capitalized. 

2. Spread operator: Spread operator syntax allows data types that can be iterated on to exist in places where arguments are not expected, or for objects to exist in places where no key:value pairs are expected. The spread operator allows code to be more declarative and readable. It uses ... syntax

3. React state: A built-in component variable that stores data that determines how the component delivers and acts within React.

4. React props: Unique and specific objects used to pass information between components within React. Props are properties they cannot be changed, only read by users.

5. DOM events: DOM stands for Document Object Model. A DOM event is an interaction between user and web application such as hovering over elements and clicking on it, or typing something on the keyboard in order to for an instance to occur. DOM is built in to React. 
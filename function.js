// Using functoins => sum of two numbers
// function sumTwoNumbers() { // function declaration
//     return 2+3; // executed code
// }
// const sumOfTwoNumbers =  sumTwoNumbers(); // assiging value to a new variable
// console.log(sumOfTwoNumbers); // output from the executed code

// function with parameters || passing urguments

// function sumTwoNumbers(number1, number2) { // function with paramenters
//     return number1 + number2;
// }
// const sumOfTwoNumbers =  sumTwoNumbers(2, 5); // assigning values
// console.log(sumOfTwoNumbers);

// Using function to find even or odd number
// function isEven(number) {
//     return number % 2 === 0;
// }
// const sumOfTwoNumbers =  isEven(2);
// console.log(sumOfTwoNumbers);
// ------------------------ //

// Use of (if else) in functions
// function declaration
// function congratulation(inviting) {
//     // if else statement begins
//     if(inviting === 'a') {
//         alert('Congratulation! You pick the write answer!');
//     }else {
//         alert('Wrong answer. Try next time!');
//     }
// }
// // Assinging the value to a new variable
// const message = congratulation("a")
// // result 
// console.log(message);
// -------------------------- //

// play with string using function

// function myString(letter) {
//     return (typeof letter); // return string
//     // return letter.slice(0,4); // return "a,b,c,d"
//     // return letter.length-1; // return 5 
//     // return letter.toUpperCase(); // transform letters to upper case
//     // return letter.toLowerCase();// same as above
// }

// // calling function
// const result = myString("abcdef");
// // result
// console.log(result)

// using array inside function
// function declaration
// function checkNumber(array, targetedNumber) {
//     // looping the array
//     for(let i = 0; i<array.length; i++) {
//         // take decisions
//         if(array[i]=== targetedNumber) {
//             // return targeted value
//             // return array[i];
//             // return index of the targeted element
//             // return i;
//         }
//     }
//     // if false, terminate the for loop
//     return `try next time`
// } 
// // declaring array
// const myArray = [5,15,23,12,16,28];
// // assigning value to a new variable
// const result = checkNumber(myArray, 40);
// // result
// console.log(result);
// ====================== //
     

// =============================================================== //
// function expression
// Using functoins => sum of two numbers
// const sumTwoNumbers = function() { // function declaration
//     return 2+3; // executed code
// }
// const result = sumTwoNumbers();
// console.log(result)
// ---------------------------- //



// function with parameters || passing urguments & function expression

// const  sumTwoNumbers = function(number1, number2) { // function with paramenters
//     return number1 + number2;
// }
// const result = sumTwoNumbers(3,6);
// console.log(result)

// Using function expression to find even or odd number
// const  isEven = function(number) {
//     return number % 2 === 0;
// }
// const sumOfTwoNumbers =  isEven(3);
// console.log(sumOfTwoNumbers);
// ------------------------ //

// Use of (if else) in functions expression
// function declaration
// const  congratulation = function(inviting) {
//     // if else statement begins
//     if(inviting === 'a') {
//         return 'Congratulation! You pick the write answer!';
//     }else {
//         return 'Wrong answer. Try next time!';
//     }
// }
// // // Assinging the value to a new variable
// const message = congratulation("e");
// // result 
// console.log(message);
// -------------------------- //

// play with string using function expression

// const  myString = function(letter) {
//     return (typeof letter); // return string
// //     // return letter.slice(0,4); // return "a,b,c,d"
// //     // return letter.length-1; // return 5 
// //     // return letter.toUpperCase(); // transform letters to upper case
// //     // return letter.toLowerCase();// same as above
// }

// // // calling function
// const result = myString("abcdef"); 
// // result
// console.log(result)
// ----------------------------------------- //
// using array inside function expression
// function declaration
// const  checkNumber = function(array, targetedNumber) {
//     // looping the array
//     for(let i = 0; i<array.length; i++) {
//         // take decisions
//         if(array[i]=== targetedNumber) {
//             // return targeted value
//             return array[i];
//             // return index of the targeted element
//             // return i;
//         }
//     }
//     // if false, terminate the for loop
//     return `try next time`
// } 
// // declaring array
// const myArray = [5,15,23,12,16,28];
// // assigning value to a new variable
// const result = checkNumber(myArray, 12);
// // result
// console.log(result);
// ====================== //

// arrow function
// Using functoins => sum of two numbers
// const sumTwoNumbers = () => { // function declaration
//     return 2+3; // executed code
// }
// const result = sumTwoNumbers();
// console.log(result)
// ---------------------------- //



// arrow function with parameters || passing urguments & function expression

// const  sumTwoNumbers = (number1, number2) => { // function with paramenters
//     return number1 + number2;
// }
// const result = sumTwoNumbers(3,6);
// console.log(result)

// Using arrow function & function expression to find even or odd number
// const  isEven = (number) => {
//     return number % 2 === 0;
// }
// const sumOfTwoNumbers =  isEven(3);
// console.log(sumOfTwoNumbers);
// ------------------------ //

// Use of (if else) in functions expression
// arrow function declaration
// const  congratulation = (inviting) => {
//     // if else statement begins
//     if(inviting === 'a') {
//         return 'Congratulation! You pick the write answer!';
//     }else {
//         return 'Wrong answer. Try next time!';
//     }
// }
// // // Assinging the value to a new variable
// const message = congratulation("e");
// // result 
// console.log(message);
// -------------------------- //

// play with string using function expression

// const  myString = (letter) => {
//     return (typeof letter); // return string
// //     // return letter.slice(0,4); // return "a,b,c,d"
// //     // return letter.length-1; // return 5 
// //     // return letter.toUpperCase(); // transform letters to upper case
// //     // return letter.toLowerCase();// same as above
// }

// // // calling function
// const result = myString("abcdef"); 
// // result
// console.log(result)
// ----------------------------------------- //
// using array inside arrow function & function expression
// function declaration
// const  checkNumber = (array, targetedNumber) => {
//     // looping the array
//     for(let i = 0; i<array.length; i++) {
//         // take decisions
//         if(array[i]=== targetedNumber) {
//             // return targeted value
//             return array[i];
//             // return index of the targeted element
//             // return i;
//         }
//     }
//     // if false, terminate the for loop
//     return `try next time`
// } 
// // declaring array
// const myArray = [5,15,23,12,16,28];
// // assigning value to a new variable
// const result = checkNumber(myArray, 12);
// // result
// console.log(result);
// ====================== //

//==================================================================//
// function inside another functions

// const resultedValue = () => {
//     // first function inside parent function
//     console.log("hello world");
//     const newFunc = () => {
//         console.log('hello again!')
//     }
//     // Second function inside parent function
//     const anotherFunc = () => {
//         console.log('hello twice!')
//     }
//     // calling first function
//     newFunc()
//     // calling second function
//     anotherFunc()
// }
// // calling parent function
// resultedValue();

//---------------------------------//

//== rest parameters using function
// sum of all number using funcion
// function initialization
// const sumAllNumber = (...sum) => {
//     // variable declaration inside function
//     let total = 0;
//     // loop begins
//     for(let i = 0; i<sum.length; i++) {
//         total = total + sum[i];
        
//     }
//     // return result
//     return total;
// }
// // calling function & to assign a value to a new variable
// const result = sumAllNumber(2,3,4,5,6,7,8);
// // result
// console.log(result)
//=========================//

// == parameter destructuring
// const person = {
//     name: 'Usama',
//     age: 24
// }

// // function begins & parameter destructuring
// const myFunc = ({name: userName, age: userAge}) => {
//     console.log(typeof userName);
//     console.log(typeof userAge)
// }
// // calling function
// myFunc(person);
//==========================================//
// callback function 

// const func2 = (name) => {
//     console.log(`hello everyone from ${name}`)
// }
// const func1 = (callback) => {
//     console.log('Hello world')
//     callback('Usama')
//     callback('Anwar')
// }
// func1(func2);

// callback function 
// const func2 = (name) => {
//     console.log(`hello from function 2. me ${name}`)
// }

// const func1 = (callback) => {
//     console.log('Hello world')
//     callback('Usama')
//     callback('Anwar')
// }
// func1(func2);
//==================================//

// function returning function
// const myFunc = () => {
//     return hello = () => {
//         return `hello world`
//     }
//     // OR
    
// }
// const result = myFunc();
// console.log(result)
//-------------------------//
//================================================================//

// Topic ==> default parameters ==//

// function parameter(a,b=5) {
//     return a-b;
//     // 20 - 119 = -99
// }
// const result = parameter(20,119);
// console.log(result); // ouput = -99
// Topic==== rest parameter ==== //

// Simple program
// const numbers = (a,b,c) => {
//     console.log(`Value of a : ${a}` )
//     console.log(`Value of b : ${b}` )
//     console.log(`Value of c : ${c}` )
// }
// numbers(1,2,3);

// program using rest parameter // You should see the difference

// const numbers = (a,b,...c) => {
//     console.log(`Value of a : ${a}`)
//     console.log(`Value of b : ${b}`)
//     console.log(`Value of c : ${c}`)
// }
// numbers(1,2,3,4,5,6,7,8,9);

// list of items to add with each others using rest parameter
// const sumNumbers = (...numbers) => {
//     let total = 0;
//     for(let number of numbers) {
//         total = total + number;
        
//     }
//     return total;

// }
// const result = sumNumbers(1,2,3,4,5,6,7,8,9);
// console.log(result)

// ======== callBack function
// // anotherFunc declaration
// const anotherFunc = (age, gender) => {
//     console.log(`I am ${age} years old!`);// output
//     console.log(`I am ${gender}`);// output
    
// }
// // newFunc declaration begins
// const newFunc = ( firstName, lastName) => { // name is a parameter
//     console.log(`first name : ${firstName}`); // first name : "Usama"
//     console.log(`last name :  ${lastName}`); // last name : "khan"
//     anotherFunc(24, "male") // anotherFunc call
    
// }

// // first function while call
// const myFunc = (callBack) => { // paramater you can use freely
//     const result = 2 + 2; // simple output
//     console.log(result); // output
//     callBack("Usama", "khan") // newFunc call
// }
// parent function call
// myFunc(newFunc);

//====================================================================//

// Topic==> Function returning function==
// const myFunc = () => {
//     console.log("a");
//     const newFunc = () => {
//         console.log("Hello world")
//     }
//     return newFunc();
    
// }
// myFunc();
//=====================================================================//
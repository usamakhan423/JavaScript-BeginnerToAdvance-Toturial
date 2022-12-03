// function in JS
// function sumOfTwoNumbers(a,b) {
//     return a+b
// }
// const result = sumOfTwoNumbers(5,6)
// console.log(result)
//-----------//
// using function to find even or add numbers
// function isEven(number) {
//     return number%2 === 0;
// }
// const result = isEven(6)
// console.log(result)
//-----------//
// Use of if else in a function

// function guessAlphabet(alphabet) {
//     if(alphabet==='a'){
//         return `You guess the right answer`
//     }else {
//         return `Try next time!`
//     }
// }
// const result = guessAlphabet('b')
// console.log(result)
//------//
// some string methods using string
// function guess(string) {
//     // return (typeof string)
//     // return string.length
//     // return string.toUpperCase();
//     return string.toLowerCase();
// }
// const result = guess('abcdef')
// console.log(result)
//---------------------//

// use of array inside function
// take array as a parameter
// function guessNumber(array, targetedNumber) {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i]===targetedNumber) {
//             return `You guess the right answer`
//         }
//     }
//     return `try next time`
// }
// const result = guessNumber([1,2,3,4,5,6], 4)
// console.log(result)
//-----------------------//
// function expression
// const myFunction = function() {
//     return 2+5
// }
// const result = myFunction()
// console.log(result)
//-----------//
// using function expression to find even or odd numbers
// const isEven = function(number) {
//     return number%2 === 0;
// }
// const result = isEven(2)
// console.log(result)
//-----------------//
// using function expression and inside array and if else
// to find the targetedNumber inside an array
// const myFunction = function(array, targetedNumber) {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i]===targetedNumber) {
//             return `You guess the number`
//         }
//     }
//     return `Try next time`
// }
// const result = myFunction([1,2,3,4,5,6], 5);
// console.log(result)
//-------------------//

// Arrow function

// const myFunc = () => {
//     return 2+4
// }
// const result = myFunc()
// console.log(result)
//-------------//

// using arrow function to find even or odd number 
// const isEven = (number) => {
//     return number %2 === 0;
// }
// const result = isEven(4)
// console.log(result)
//--------------//
// using arrow function to find the targetedNumber in a given array

// const findNumber = (array, targetedNumber) => {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i]===targetedNumber) {
//             return `You got the right number`
//         }
//     }
//     return `Try next time`
// }
// const array = [1,2,3,4,5,6,7,8,9]
// // const result = findNumber([1,2,3,4,5,6,7,8,9], 18);
// const result = findNumber(array, 8);

// console.log(result)
//---------------//

// function inside another function
// const func = () => {
//     console.log('Hello!')
//     const anotherFunc = () => {
//         console.log('Hello again!')
//     }
//     const newFuc = () => {
//         console.log('Hello again and again!')
//     }
//     newFuc()
//     anotherFunc()
    
// }
// func()
//=======================================================//
// rest parameter using function
// simple arrow function to add element in the array
// let total = 0;
// const restPara = (sum) => {
//     for(let i = 0; i<sum.length; i++){
//         total = total + sum[i];
//     }
//     return total;
// }
// const result = restPara([1,2,3,4,5,6,7,8,9])
// console.log(result)

// using rest parameter
// let total = 0;
// const restPara = (...sum) => {
//     for(let i = 0; i<sum.length; i++){
//         total = total + sum[i];
//     }
//     return total;
// }
// const result = restPara(1,2,3,4,5,6,7,8,9)
// console.log(result)
//=============================================================//

// parameter destructuring using objects and functions

// const obj1 = {
//     name: 'Usama',
//     age : 24
    
// }
// // parameter destructuring begins
// const func = ({name: userName, age: userAge}) => {
//     console.log(userName)
//     console.log(userAge)
// }

// func(obj1)
//============================================================//

// callBack function in JS
// func1 begin
// const func2 = (name) => { // parameter and function declaration
//     console.log(`Hello everyone from ${name}`) // output
// }
// // func1 begin
// const func1 = (func2) => { // assigning fucntion2 as a parameter
//     console.log('Hello world') // func1 output
//     func2('Usama'); // func2 assigning parameter value

// }
// // calling function
// func1(func2)
//----------------//
// OR BEST USE 
// func2 begin
// const func2 = (name) => { // parameter and func2 declaration
//     console.log(`Hello everyone from ${name}`) // output
// }

// // func1 begin
// const func1 = (callBack) => { // callback is a parameter used as a func2
//     console.log('Hello world') // output of func1
//     callBack('Usama'); // calling func2 & assigning value to parameter

// }
// // calling func1 & func2 as a function parameter
// func1(func2);
//-------------------------------------------------------------------//
// func2 begins
// const func2 = (name) => { // parameter and func2 declaration
//     console.log(`Hello everyone from ${name}`) // output
//     if(name=== 'anwar') { // using if else to take a decision
//         console.log(`${name} is 20 years old!`) // if true output
//     }else { // nahi tho ye karo
//         console.log(`${name} is just 24 years old!`) // output
//     }
// }

// // func1 begin
// const func1 = (callBack) => { // callback is a parameter used as a func2
//     // console.log('Hello world') // output of func1
//     callBack('Usama'); // calling func2 & assigning value to parameter
//     callBack('anwar'); // calling func2 again and pass second ... 
//     // --> parameter value, as 'anwar'.
// }
// // calling func1 & func2 as a function parameter
// func1(func2);

////////////////////////////////////////////////////////////////
// function returning function

// function inside other functions
// const parentFunc = () => {
//     const statement = () => {
//         console.log('Hello everyone!')
//     }
//     const addTwoNumbers = (num1, num2) => {
//         return num1 + num2;
//     }
//     const mul = (num1, num2) => {
//         return num1 * num2;
//     }
//     console.log('Hi!')
//     statement();
//     const sum = addTwoNumbers(2,3);
//     console.log(`The sum of two numbers is ${sum}`)
//     const multiplied = mul(5,7);
//     console.log(multiplied)
// }
// parentFunc();
// best use case
// const parentFunc = () => {
//     const statement = () => {
//         console.log('Hello everyone!')
//     }
//     const addTwoNumbers = (num1, num2) => num1 + num2;
//     const mul = (num1, num2) => num1 * num2;

//     console.log('Hi!')
//     statement();
//     const sum = addTwoNumbers(2,3);
//     console.log(`The sum of two numbers is ${sum}`)
//     const multiplied = mul(5,7);
//     console.log(multiplied)
// }
// parentFunc();
//========================================================//
// Lexical scope in functions
// const place = 'Malakand'; // lexical scope variable
// const appFunc = () => {
//     const func1 = (userName) => {
//         console.log(`Hello this is ${userName}`)
//         const func2 = (place) => {
//             console.log(`Hello! welcome to ${place}`)
//         }
//         func2('Malakand')
//     }
//     console.log('Hello')
//     func1('Usama khan')
// }
// appFunc()
//--------------------------------------------------------//

// block scope VS function scope
// let and const are block scope 
// var is a fuction scope
// {
//     let name = 'Usama';
//     console.log(name)
// }

// {
//     const name = 'Usama';
//     console.log(name)
// }
// {
//     var firstname = 'mohit'
// }
// console.log(firstname)
// function scope
// You should call any value  outside of the function
// const func1 = () => {
//     return `HELLO`;
// }
// const result = func1()
// console.log(result)
//----------------------------------------------------------//
// function returning function

// const myFuc = () => {
//     const myFunc2 = () => {
//         return `Hello`;
//     }
//     console.log('hi!')
//     return myFunc2;
// }
// const result = myFuc();
// const result2 = result();
// console.log(result2)
//-------------------------------//

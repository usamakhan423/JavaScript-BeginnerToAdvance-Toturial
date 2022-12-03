// while loop with example

// Variable declaration with a value of BigINT()
// let number = 14;
// let total = 0;
// let i = 0;

// // Starting while loop!
// while(i <= number) {
//     total = total + i;
//     i++;
// }
// // result!
// console.log(total);
// Output! --> 55
// ---------------- //

// for loop!
// Variable declaration!
// let number = 10;
// let total = 0;

// // for loop start!
// // to print first ten(10) natural number!
// for(let i = 0; i <= number; i++) {
//     total = total + i;
// }
// // result!
// console.log(total);

// Output --> 55
// -------------------- //

// break statement!

// for loop start
// for(let i = 1; i<=10; i++) {
//     // second condition to limit the loop!
//     if(i===4) {
//         break;
//     }
//     // Output even when if condition is true!
//     console.log(i);
// }
// console.log('hello there')

// continue statement!
// for(let i = 1; i<=10; i++) {
//     // second condition to limit the loop!
//     if(i===4) {
//         break;
//     }
//     // Output even when if condition is true!
//     console.log(i);
// }
// console.log('hello there')
// --------------------------- //

// do while loop!
// variable declaration!
// let i = 19; // starting value!
// // do while loop start!
// do{
//     console.log(i);
//     i++;
// }while(i<=23); // ending value!
// ----------------------- //

// loop exercise!
// Write a JS code to print Even numbers in given array!

// variable declaration!
// let number = 20; // looping number!

// // // using for loop to make it smart!
// for(let i = 1; i<=number; i++) {
//     if(i%2===0){
//         console.log(`${i}`);
//     }
    
// }
// ------------- //

// 2nd problem | excercise!
// Write a JS code to find the power of a number using for loop!

// variable declaration!
// let number = 5; // numbers to find square root!

// // for loop start to make it smart!
// for(let i = 1; i<=number; i++) {
//     console.log(i**2);
// }
// ------------------ //

// Write a JS code to find the no of digits in a number!

// let number = String(23659812);

// console.log(typeof number, number.length);
// --------------------------------------- //

// arrays --> Ordered collection of elements!
// let fruits = ['apple', 'mango', 'banana'];

// // result!
// console.log(fruits);

// // to change the value by another value
// fruits[1] = 'grapes';
// console.log(fruits);

// // find specific element in the array
// console.log(fruits[2]);

// // to find specificly that it is an array!
// console.log(Array.isArray(fruits));
// -------------------------- //

// Difference btw primitive & reference data types!
// variable declaration & assigning values!
// let num1 = 5;
// let num2 = num1;
// // print outputs
// console.log(num1) // 5
// console.log(num2) // 5
// // increament values!
// num1++;
// // result!
// console.log(num1) // 6
// console.log(num2) // 5
// ------------------------- //

// reference data type!
// variable declaration and assigning values!
// let array1 = ['mango', 'banana'];
// let array2 = array1;
// // current outputs!
// console.log(array1); // mango, banana!
// console.log(array2); // mango, banana!
// // push element at the last of an array!
// array1.push('apple');
// // results
// console.log(array1); // mango, banana, apple!
// console.log(array2); // mango, banana, apple!
// -------------------------------------------- //

// how to clone || copy an array!
// array declaration!
// let array1 = ['item1', 'item2'];
// // slice method to clone the existing array1
// let array2 = array1.slice(0).concat(['item3', 'item4']);

// // concat method to clone the existing array!
// let array2 = [].concat(array1, ['item3', 'item4']);

// // creating another array to add more items!
// let oneMoreArray = ['item5', 'item6'];

// // clone array using spread method!
// let array2 = {...array1, ...oneMoreArray};

// // to check the arrarys are of equal or not!
// console.log(array1===array2)

// // result of the two arrays!
// console.log(array1)
// console.log(array2)
// -------------------- //

// for loop using arrays!

// let fruits = ['mango', 'banana', 'grapes'];
// let newCombination = [];
// for (let i = 0; i<=fruits.length-1; i++){
//     newCombination.push(fruits[i].toUpperCase());
// }
// console.log(newCombination)
// ---------------------- //

// while loop practice work!
// let array = ['mango', 'banana', 'grapes', 'apple',];
// let i = 0;
// while(i<array.length){
//     console.log(array[i]);
//     i++;
// }
// ----------------- //

// 'for of' loop!
// example
// const fruits = ['mango', 'banana', 'grapes'];

// for(let fruit of fruits) {
//     console.log(fruit.toUpperCase());
// }
// -------------------- //

// example!
// array declaration!
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // for of loop execution to make it smart!
// for(let num of numbers) {
//     console.log(num)
// }
// ------------------- //

// array destructuring!
// array declaration!
const array = ['mango', 'banana', 'grapes', 'apple'];

// destructuring is used here!
let [myVar1, myVar2, ...myNewArray] = array;

// result!
console.log(myVar1, myVar2);
console.log(myNewArray);
// ====================== //







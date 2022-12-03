// Excercise -> 1) //
// Get the sum of two arrays…
// actually the sum of all their elements.

// variable declaration!
// const array1 = [5,10,15,20,25,30];
// const array2 = [58,30,55,90,85,60];
// let total1 = 0;
// let total2 = 0;
// let result;

// // for loop logic start!
// for(let i = 0; i<array1.length; i++){
//     // loop inside another loop!
//     for(let j = 0; j<array2.length; j++){
//         total2 = total2 + array2[j]; // logic
//     }
//     total1 = total1 + array1[i]; // logic
//     // console.log(total)
// }
// // outputa
// console.log(`array1 total : ${total1}`)
// console.log(`array1 total : ${total2}`)
// // assigning values!
// result = total1 + total2;

// // final result!
// console.log(`${total1} + ${total2} = ${result}`);

// == Congratulation! You done a great Job!!!!! == //
// ================================================= //

// Exercise 2)
// Using a for loop output the elements in reverse order

// const fruits = ['mango', 'apples', 'bananas', 'grapes'];
// // let reverse = fruits.reverse();
// let reverse;
// for(let i = 0; i<fruits.length; i++) {
    
//     console.log(fruits[i]);
// }
// reverse = fruits.reverse();
// console.log(reverse)

// ===================== //

// Exercise 3)
// take two arrays add the element in pairs of the two arrays

// const array1 = [5, 3, 5, 20];
// const array2 = [1, 2, 10, 35];

// const resultedArray = [];

// for(let i = 0; i<array1.length; i++){
//     resultedArray.push(array1[i] + array2[i]);
        
// }
// console.log(resultedArray)
// ============================ //

// Exercise 4) ==
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let string = 'javascript';

// for(let i = 0; i < string.length; i++) {
//     if(string[i]%2!==0) {
//         console.log(string[i])
//     } else {
        
//     }
//     console.log('Z')
// }
// ===== BOOM ==== //
// ================= //

// Check if a string contains the letter “y”. NO || YES

// let paragraph = 'Hello welcome to m blog';

//     if(paragraph.match('y')){
//         console.log(`Yes the alpabets is here`);
//     } else {
//         console.log('No not availeble')
//     }
    
// ======================== //

// Exercise 6)
// to find indexes of all the  element in given array!
// array declaration!
// const fruits = ['mango', 'banana', 'apple', 'grapes'];
// const newArray = []; // create array for upperCase result
// for(let index in fruits) {
//     // console.log(index); // to print the index of the given array
//     // OR
//     // convert the array into upperCase by using push method
//     newArray.push((fruits[index].toUpperCase())); 
// }

// // output of the new array!
// console.log(newArray)
// ========================== //

// Exercise 7)
// find an element in the given array!

// const elements = [3,4,5,6,7,8,9];

// for(let element in elements) {
//     if(element==='4') {
//         console.log('element found!');
//         break;
//     } else {
        
//     }
    
// }

// array destructuring Exercise !!
// const fruits = ['mango', 'banana', 'apple', 'grapes'];

// // let [var1, var2] = fruits;
// let [var1, var2, ...newArray] = fruits;
// // const newArray = fruits.slice(2);
// console.log(var1, var2);
// console.log(newArray);
// ==================== //


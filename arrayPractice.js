// Array in JS
// const array = [1,2,3,4,5,6];

// console.log(array)
// //---------//

// let stringArray = ['apple', 'mango', 'banana'];
// console.log(stringArray)

// // Not a good use case
// stringArray[0] = 'grapes';
// stringArray[1] = 'nashpati';
// console.log(stringArray)
//------------//

// to find a specific element in the array

// const array = ['apple', 'mango', 'banana'];

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// // Array.isArray find that it is an array or not. \\ true or false
// console.log(Array.isArray(array))
//--------------------//

// premitive and referrence data types
// lets do example
// let num1 = 5;
// let num2 = num1;
// console.log(num1)
// console.log(num2)
// num1++;
// console.log(num1)
// console.log(num2)

// another example on primitive 
// let string1 = 'mango';
// let string2 = string1;
// console.log(string1)
// console.log(string2)
// string1 = 'banana';
// console.log(string1)
// console.log(string2)
//------------------//

// referrence data types

// let fruit1 = ['mango', 'apple'];
// let fruit2 = fruit1;

// console.log(fruit1)
// console.log(fruit2)
// fruit1.push('grapes')
// console.log(fruit1)
// console.log(fruit2)
//-----------------------------------------------------------//
// how to clone or copy an array
// just simple use spread method || its so simple
// just use three dots before the array which you want to copy
// let color1 = ['black', 'white'];
// let color2 = [...color1];

// console.log(color1)
// console.log(color2)
// console.log(color1===color2); // return false bc its a copy but not equal
//=======================================================//

// array destructuring

// let colors = ['purple', 'white', 'red','yellow', 'brown'];

// let [color1, color2, ...newArray] = colors;
// console.log(colors)
// console.log(color1)
// console.log(color2)
// console.log(newArray)

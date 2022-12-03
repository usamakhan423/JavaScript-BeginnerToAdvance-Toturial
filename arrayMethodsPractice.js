// Array methods //
// 1) forEach() method
// const myArray = [2,4,6,8];

// myArray.forEach(function(number, index) {
//     console.log(`Index is ${index}, and the product is : ${number*2}`)
// })
//-------------------------------//
// to print first name in the object within array ('users')
// const users = [
//     {firstName: 'Usama', age: 24},
//     {firstName: 'Sikandar', age: 26},
//     {firstName: 'Aamir', age: 25},
//     {firstName: 'Shadab', age: 28}
// ];
// users.forEach(function(name){
//     console.log(name.firstName)
//     console.log(name.age)
// })
//=============================================================//
// 2) map() method
// important note -->
// map() method always return a new array, means the values
// should be stored in a new array.
// Its also take a function as a callback.
// it iterate the array and also return the index.
// const myArray = [2,4,6,8];

// const result = myArray.map((number, index) => {
//     return `index is : ${index}, and the square is ${number**2}`;
// })
// console.log(result)
//==========================================================//
// 3) filter() method
// important note -->
// it should only return true OR false.
// its also return a new array
// if its return true, the code should be executed
// if false the code is to be terminated, and return the false condition
// program to find even numbers in array
// const numbers = [3,6,8,2,4,7,9];

// const isEven = numbers.filter((number) => {
//     return number%2 === 0;
// });
// console.log(isEven) // return 6,8,2,4
//-----------------------------------------------------------//
// program to find odd numbers in a given array
// const numbers = [3,6,8,2,4,7,9];

// const isOdd = numbers.filter((number) => {
//     return number%2 !== 0;
// });
// console.log(isOdd) // return 3,7,9
//=========================================================//

// 4) reduce() method
// this method must have two parameters
// accumulator, and current value
// accumulator should start from 0
// and the current value is the first index of the array

// product category initialization
// const cart = [
//     {productId: 1, productName: 'mobile', price: 12000},
//     {productId: 2, productName: 'laptop', price: 22000},
//     {productId: 3, productName: 'watch', price: 7000},
//     {productId: 4, productName: 'smartTV', price: 18000},
// ];
// // reduce() method begins
// // Note it is the most important and mostly used method
// // working with array of items
// const sum = cart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// // this 0 should be the first accumulator value
// }, 0);
// console.log(sum)
//===============================================================//
// 5) sort() method //
// important note
// you must use two parameters (a,b) to sort the given array
// const words = [11,55,37,24,98,115,231,22,67];
// // sorting an ascending order
// // words.sort((a,b) => a-b );
// // sorting on descending order
// words.sort((a,b) => b-a);

// console.log(words)
//-----------------------------------------------------//
// write a program to sort words
// const students = ['Usama', 'Rizwan', 'ALI', 'INAM', 'qaisar'];
// students.sort();
// console.log(students)
//-------------------------------------------------//
// write a program to sort product names and price
// const products = [
//     {id: 1, name: 'laptop', price: 12000},
//     {id: 4, name: 'book', price: 900},
//     {id: 5, name: 'Laptop mouse', price: 400},
//     {id: 3, name: 'pencil', price: 25},
//     {id: 2, name: 'keyboard', price: 250}
// ];
// // sorting w.r.t price
// // products.sort((a,b) => {
// //     return a.price-b.price;
// // })
// // sorting w.r.t id number
// products.sort((a,b) => {
//     return a.id-b.id;
// })
// console.log(products)
//=================================================================//

// 6) use slice method to store the value in a new array
// const products = [
//   { id: 1, name: "laptop", price: 12000 },
//   { id: 4, name: "book", price: 900 },
//   { id: 5, name: "Laptop mouse", price: 400 },
//   { id: 3, name: "pencil", price: 25 },
//   { id: 2, name: "keyboard", price: 250 },
// ];
// // slice method is used to store the data in a new array
// const resultedArray = products.slice().sort((a,b) => {
//     return a.price-b.price;
// })
// console.log(resultedArray)
//========================================================//

// 7) find() method
// const users = [
//     {userId: 1, userName: 'Usama'},
//     {userId: 2, userName: 'Irshad'},
//     {userId: 3, userName: 'Darya khan'},
//     {userId: 4, userName: 'Anwar khan'},
//     {userId: 5, userName: 'Baseer alam'},
// ];
// find userId = 4 // return 4, Anwar khan
// const result =  users.find((user) => user.userId == 4);
// find userName = Darya khan // return 3, Darya khan
// const result =  users.find((user) => user.userName === 'Darya khan');
// console.log(result)
//================================================================//
// 8) every() method
// in this method the condintion is applied and if the result true 
// it return true and the code should be exucuted
// program to check all the numbers is even or not
// const isEven = [2,4,6,8,10]; // it should return true
// // using every() method
// const result = isEven.every((number) => number%2 === 0)
// console.log(result)
//================================================================//
// program to check all the prices are above 10,000 or not
// use every() method
// const products = [
//     {id: 1, name: 'laptop', price: 13000},
//     {id: 2, name: 'smart watch', price: 15500},
//     {id: 3, name: 'pocket', price: 16900},
//     {id: 4, name: 'dress', price: 11234},
// ];
// const result = products.every((product) => product.price > 10000);
// console.log(result)
//================================================================//
// 9) some() method
// is used to find the specific element by a specific reason
// const users = [
//     {userId: 1, userName: 'Usama', price: 15000},
//     {userId: 2, userName: 'Irshad', price: 32000},
//     {userId: 3, userName: 'Darya khan', price: 67000},
//     {userId: 4, userName: 'Anwar khan', price: 95000},
//     {userId: 5, userName: 'Baseer alam', price: 130000},
// ];
// // to print the number which is greater than 100000
// // const result = users.some((user) => user.price > 100000);
// // console.log(result)
// // to print the userName which length is less than 10
// const result2 = users.some((string) => string.userName.length < 10)
// console.log(result2)
//================================================================//
// 10) fill() method
// to fill a given character or name in the specific index in the array
// it must have filling item, starting index, ending index
// const numbers = [2,5,7,98,34,56]
// // 
// const result1 = numbers.fill(0,2,5);
// console.log(result1)
//==============================================================//
// 11) splice() method
// important Note
// starting value"index", delete items, insert items
// const items = ['item1', 'item2', 'item3', 'item4']
// // to add and delete two items in/from the array
// const result = items.splice(1, 2, "item2 changed", "item3 changed");
// // just to delete two items from the array
// const result1 = items.splice(2,2);
// console.log(result1)
// // console.log(`Changed items ara ${result}`)
// console.log(items)
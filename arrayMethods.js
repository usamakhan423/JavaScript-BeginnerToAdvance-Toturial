// reduce method using array

// const numbers = [1,2,5,6,8,9,7,4,3];

// const sum = numbers.reduce((acumulator, currentValue) => {
//     return acumulator + currentValue;
// });
// console.log(sum);
//
// addToCart problem to solve by reduce method

// const items = [
//     {productId : 1, name : "perfume", price : 1200},
//     {productId : 1, name : "mobile", price : 2200},
//     {productId : 2, name : "laptop", price : 3200},
//     {productId : 2, name : "smartWatch", price : 4200},
//     {productId : 3, name : "moneyPocket", price : 5200},
// ]
// const total = items.reduce((totalPrice, currentValue)=> {
    
//     return totalPrice = totalPrice + currentValue.price;
// },)
// console.log(total);

// filter method concept

// const numbers = [2,3,6,9,7,5,1,4,8];

// const isEven = (number) => {
//     return number % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
////////////////////////////////////////////////////////

//  use reduce method to print Roll Nos of the student from 30 to 40

// const numbers = [1,2,3,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];

// const findNumber = (initialValue, currentValue) => {  
    
//     for(let i = 0; i<=numbers.length; i++) {
//         if(numbers[i] == 3) {
//             return numbers[i];
//         }
//     }
// }
// const resultedValue = numbers.filter(findNumber);
// console.log(resultedValue)

// sort() method
// it take the numbers input as a string and sort it
// const numbers= [4,7,2,3,1,9,56,23,45];

// const sorted = numbers.sort()

// console.log(sorted)
/////////////////////

// using sort() method to  arrange the numbers
// const numbers= [4,7,2,3,1,9,56,23,45];

// const sorted = numbers.sort((a,b) => {
//     return b-a;
// })

// console.log(sorted);
//////////////////////////////////////////////

// ==using sort method to arrange the object in order== //

// const items = [
//     {itemid: 1, itemName: "Mobile phone", itemPrice: 13000},
//     {itemid: 2, itemName: "smart watch", itemPrice: 5000},
//     {itemid: 3, itemName: "lady purse", itemPrice: 3000},
//     {itemid: 4, itemName: "ear rings", itemPrice: 500},
//     {itemid: 5, itemName: "shoes", itemPrice: 18000}
// ]

// const result = items.sort((a,b) => {
//     // to sort it descending order
//     // return b.itemPrice- a.itemPrice;
//     // OR to sort it ascending order
//     return a.itemPrice - b.itemPrice;
// })

// console.log(result);
//================================================//

// find() method
// find a specific string by using find() method
// const string = ["burhan", "shadab", "anwar", "suliman"];

// const find = string.find((user) => user === "shadab");
// console.log(find);
// // use find() method to find a specific id within object
// const users = [
//     {userId: 1, userName: "Usama", dep: "CS"},
//     {userId: 2, userName: "shadab", dep: "maths"},
//     {userId: 3, userName: "anwar", dep: "urdu"},
//     {userId: 4, userName: "ali", dep: "english"},
// ];

// const outPut = users.find((user) => user.userId === 4);
// console.log(outPut);
// ================================================================ //
// every() method
// use every() method to find all the element which ara less than 1000
// const products = [
//     {productId: 1, productName: "Burger", productPrice: 250},
//     {productId: 2, productName: "pizza", productPrice: 450},
//     {productId: 3, productName: "donuts", productPrice: 150},
//     {productId: 4, productName: "fish", productPrice: 600},
//     {productId: 5, productName: "double naan", productPrice: 20},
//     {productId: 6, productName: "chicken", productPrice: 700},
// ];

// const result = products.every((number) => number.productPrice < 1000);
// console.log(result);

//===============================================================//

// some() method

// const users = [
//     {productId : 1, productName : "banana", price : 120},
//     {productId : 2, productName : "apple", price : 200},
//     {productId : 3, productName : "mango", price : 250},
//     {productId : 4, productName : "grapes", price : 130},
//     {productId : 5, productName : "gift", price : 500},
// ];
// const result = users.some((number) => number.price > 1000);
// console.log(result);
//===========================================================//

// splice() method
// do insertion and deletion 
// starting, deleted value, insetion value

// delete items using splice() method
// const string = ['item1', 'item2', 'item3', "item4", "item5", "item6",];
// const deletedItems = string.splice(2, 2);
// console.log(deletedItems);
// //------------------------------//

// // insert an items to an array
// const items = ['item1', 'item2', 'item3', "item4", "item5", "item6",];
// items.splice(2, 0, "inserted item1", "inserted item2");
// console.log(items);
//----------------------//
// insertion and deletion together
// const string = ['item1', 'item2', 'item3', "item4", "item5", "item6",];
// const insertedItems = string.splice(1, 2, "inserted Item1", "inserted item2");
// console.log(string)
// console.log(insertedItems)
/////////////////////////////////////////////////////////////////////////






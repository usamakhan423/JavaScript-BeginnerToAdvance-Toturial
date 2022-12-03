// == Oject methods==//
// sets() iterable
// const array = [1,2,3,4,5];
// const unique = new Set(array);
// console.log(unique)

// // using set() to iterate an array
// const users = new Set(["user1", "user2", "user3"]);
// console.log(users);

// // object is not iterable || it gives you an error!
// const obj = {
//     name: "Usama",
//     rollNo: 45
// }
// const products = new Set(obj)
// console.log(products)
//////////////////////////////////////////////////////////
// real world program to use set() iterable
// const numbers = [1,2,3,4,5,6,7,8,8,7,6,5,4,3,2]

// const unique = new Set(numbers, [1,2,3]);
// console.log(unique)

// 
// const items = [
//     {productId : 1, name : "perfume", price : 1200},
//     {productId : 1, name : "mobile", price : 2200},
//     {productId : 2, name : "laptop", price : 3200},
//     {productId : 2, name : "smartWatch", price : 4200},
//     {productId : 3, name : "moneyPocket", price : 5200},
// ]
// const unique = new Set(items.productId);
// console.log(unique)
// const total = unique.reduce((totalPrice, currentValue)=> {
    
//     return totalPrice = totalPrice + currentValue.price;
// },)
// console.log(total);


// 
// const numbers = [2,3,6,6,7,7,1,4,4];
// let resultedArray = [];
// const unique = new Set(numbers);
// resultedArray.push(unique);

// console.log(unique)
// console.log(resultedArray)
// // console.log(unique)
// for(let number of resultedArray) {
//     resultedArray = resultedArray.push(number % 2 === 0);
// }
// console.log(resultedArray);
///////////////////////////////////////////////////////////////
// Map() method
// const userDetail = new Map();
// userDetail.set("first name", "Usama khan");
// userDetail.set("age", 24);
// userDetail.set("gender", "male")
// console.log(userDetail)
// // console.log(userDetail.get("first name"));
// // console.log(userDetail.get("age"))
// // console.log(userDetail.get("gender"))
// for(let key of userDetail.keys()) {
//     console.log(key);
// }
// Example on map() 
// object declaration
// const person1 = {
//     id: 1,
//     name : 'Usama',
//     gender: "male"
// }
// // map() method begin
// const personDetail = new Map();
// // assinging value to the map
// personDetail.set(person1, {dep: "cs", age: 24})
// // current output of the object
// console.log(personDetail)
// // getting element from object 
// console.log(person1.id) // id => 1
// console.log(person1.name) // name => Usama
// console.log(person1.gender) // gender => male
// // To get elements from map you should use get() method  
// console.log(personDetail.get(person1).dep)
// console.log(personDetail.get(person1).age)
// console.log(personDetail)



// Objects in JS //
// objects are referrence type just like in array
// arrays are not sufficient for real world projects
// objects have no index

// how to create objects
// const myObj = {name: 'Usama', age: 24}
// OR
// const newObj = {
//     name: 'Usama',
//     age: 24,
//     hobbies:  ['Cricket', 'music', 'chill']
// }
// // console.log(myObj)
// console.log(newObj)
// // how to access object elements
// // to access name key value to an object
// console.log(newObj.name)
// // to access age
// console.log(newObj.age)
// // to access hobbies
// console.log(newObj.hobbies)
// // to access hobbies array and also array specific
// // element
// console.log(newObj.hobbies[1])
// // how to add key value pairs in object
// // to add a new key value to an newObj object
// newObj.gender = 'male'
// console.log(newObj)
// // to add a new key value to an newObj object
// newObj.education = 'matric'
// console.log(newObj)
//=================================================//

// difference btw dot and bracket notations //
// important Note
// if the key contains space you should use 
// double qoutes ("") OR single qoutes ('')
// within sqaure brakets []
// const obj1 = {
//     name: 'Usama',
//     "age in number": 24,
//     height: "5 feet, 8 inch"
// }
// console.log(obj1.name)
// console.log(obj1['age in number'])
// console.log(obj1['height'])
//------------------------------------//
// object iteration //
// looping in object
// const obj1 = {
//     name: 'Usama',
//     age: 24,
//     hobbies: ["Cricket", 'music', 'sleeping']
// }
// // loop start and key a variable that store the data
// // in new object
// for(let key in obj1) {
//     // here obj1 is an object and key is a variable 
//     // that store the data in a new array
//     console.log(obj1[key]);
//     console.log(Array.isArray(obj1[key]));
// }
//=============================================//
// spread operator in Objects
// to copy or clone the one or more objects
// obj1 created
// const obj1 = {
//     key1: 'Value1',
//     key2: 'Value2'
// }
// // obj2 created
// const obj2 = {
//     key3: 'Value3',
//     key4: 'Value4'
// }
// // clone the array in a new object
// const newArray = {...obj1, ...obj2, key5: 'Value5'};
// console.log(newArray)
//===============================================//
// object destructuring //
// object declaration
// const fruits = {
//     value1: 'mango',
//     value2: 'apple',
// }
// // object destructuring
// const {value1: fruit1, value2: fruit2} = fruits;
// // ouput of the first value
// console.log(fruit1) // mango
// // output of the second value
// console.log(fruit2) // apple
//=============================================//
// Nested destructuring //
// array declaration // inside objects
const users = [
    {firstName: 'Usama', gender: 'male', age: 24},
    {firstName: 'Sana', gender: 'female', age: 20},
    {firstName: 'Zeeshan', gender: 'male', age: 22},
]
// destructuring method
const [{firstName: fisrtUserName}, {gender: secondGender}, {age:thirdUserAge}] = users;
// output of the first name of the first object
console.log(fisrtUserName);
// output of the second gender of the second object
console.log(secondGender);
// output of the age of the third object
console.log(thirdUserAge);


//= Objects in Javascript =//
// object overview
// const person = {
//     name : 'Usama',
//     age : 23,
//     gender : 'male'
// }
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// ======================= //

// object contain atleast one array inside!!
// object declaration
// const personDetail = {
//     name : 'Usama',
//     age : 24,
//     hobbies : ['cricket', 'reading books', 'gossip with friends'],
//     gender : 'male'
// }
// == Imported Note == //

// to print the complete array
// console.log(personDetail)
// // to print array within object
// console.log(personDetail.hobbies);
// // to print exit element in the array
// console.log(personDetail.hobbies[2]);

// OR 

// use bracket notations
// console.log(personDetail["name"]); 
// console.log(personDetail["hobbies"]);
// console.log(personDetail["hobbies"][0]);
// -------------------------------------- //

// == Which one is better // bracket notation {} || dot notation (.)
// let see
// const rollNo = {
//     name : "Usama",
//     department : "BS Computer Science",
//     // You see here is a space bt key pair
//     // Should use brackets to solve this type of problems
//     "person hobbies" : ['cricket', 'reading books', 'chill'],
//     gender : 'male'
// }
// // result
// console.log(rollNo['person hobbies']);
// console.log(rollNo['person hobbies'][1])
// Note // bracket notation is better to use
// =========================================== //

// how to insert a new element to an object
// create new variable to add another element in the object
// const key = "email"; // key value pair added
// // object declaration
// const person = {
//     name : "Usama",
//     rollNo : 45,
//     age : 24
// }
// // output of the key value pair
// person[key] = 'usamakhan@gmail.com';
// console.log(person)
// NOTE
// when you a key value pair it should return the email listed
// in the new variable that we created above
// it should return the output like this below
// email : "usamakhan@gmail.com"
//=============BOOM================//

// object methods 
//.1) iterate ( for in loop)
// const array = {
//     name: 'usama',
//     age: 24,
//     'hobbies': ['cricket', 'reading books']
// }
// for(let key in array) {
//     // console.log(array[key]);
//     console.log(`${key} : ${array[key]}`);
// }
// ============================ //

//. 2) object keys (iteration)
// const array = {
//     name: 'usama',
//     age: 24,
//     'hobbies': ['cricket', 'reading books']
// }
// console.log(Object.keys(array));
// // OR

// const val = console.log(Object.keys(array));

// console.log(val);
// =============== //

// Task to do

// const key1 = 'email';
// const key2 = 'password';
// const detail = {

// }
// detail[key1] = 'usamakhan@gmail.com';
// detail[key2] = 'something';
// console.log(detail);

// object de-structuring
// object declaration
// const fruits = {
//     name : 'mango',
//     price : '100 per kg',
//     weight: '.5 kg',
//     condition: "fresh"
// }
// // creating new object for storing data after desturcturing 
// const newObj = {
//     product: fruits.name.toUpperCase(),
//     productPrice: fruits.price.toUpperCase()
// }

// // object de-structuring applied to make it smart
// let {name: product, price : productPrice, ...restProduct} = fruits;
//     console.log(product); // this is new variable
//     console.log(productPrice); // this is also
//     console.log(restProduct) // for the rest element
// // result
// console.log(newObj) // output of the new array
// ============================================ //

// objects inside an array
// == Mostly used in real world projects == //
// objects inside array // declarartion
// const users = [
//     {userId: 101, userName: 'Usama', userAge: '24 years'},
//     {userId: 102, userName: 'Zia', userAge: '20 years'},
//     {userId: 103, userName: 'Mujeeb', userAge: '30 years'}
// ];
// // output of the current array
// console.log(users);

// starting for loop 
// and the output should be stored in a new variable called (user)
// for(let user of users) { // user is a new variable to store new data
//     // to print (userId)
//     console.log(`User Id : ${user.userId}`);
//     // to print (userName)
//     console.log(`User Name : ${user.userName}`)
//     // to print (userAge)
//     console.log(`User Age : ${user.userAge}`)
// }

// nested destructuring
// objects inside array declaration
// const users = [
//     {userId : 101, name: 'Usama', age: 24},
//     {userId : 102, name: 'zia', age: 30},
//     {userId : 103, name: 'mujeeb', age: 20}
// ]
// // output of the current array inside objects
// console.log(users)

// // de-struturing begin
// const [{userId: rollNo}, {name: userName}, {age: userAge}] = users;
// // to print the first user (rollNo)
// console.log(rollNo)
// // to print the (userName)
// console.log(userName)
// // to print the (userAge)
// console.log(userAge)
// ======================= //

// nested destructuring Example!
// array inside objects declaration
const cars = [
    {name: 'toyota', model: '2015', price: '$9000'},
    {name: 'ferrari', model: '2020', price: '$18000'},
    {name: 'BMW', model: '2022', price: '#22000'},
]
// output of the current array
console.log(cars)
// destructuring begins
const [
    {name: firstCarName, model: firstCarModel, price: firstCarPrice},
    {name: secondCarName, model: secondCarModel, price: secondCarPrice},
    {name: thirdCarName, model: thirdCarModel, price: thirdCarPrice}
] = cars;

// first object output
console.log(firstCarPrice)
console.log(firstCarModel)
console.log(firstCarPrice)
// second object output
console.log(secondCarName)
console.log(secondCarModel)
console.log(secondCarPrice)
// third object output
console.log(thirdCarName)
console.log(thirdCarModel)
console.log(thirdCarPrice)
// ======================= //



// ====== Methods ======= //
// this keyword
// function inside object
// function declaration
// function personDetail() {
//     console.log(`Person name is ${this.name}, and person age is ${this.age}`)

// }
// // object || person1 is declared
// const person1 = {
//     name: "Usama",
//     age : 24,
//     about: personDetail
// }
// // object || person2 is declared
// const person2 = {
//     name: "mohit",
//     age : 20,
//     about: personDetail
// }
// // object || person3 is declared
// const person3 = {
//     name :  "Anwar sadat",
//     age : 28,
//     about: personDetail
// }
// // calling function
// // personDetail();
// person1.about();
// person2.about();
// person3.about();

// 

// const functionDo = {
//     about() {
//         console.log(`Name is ${this.firstName}, age is ${this.age}`)
//     },
//     adress() {
//         console.log(`Id is ${this.id}, and address is ${this.adress}`)
//     }
// }
// function createUsers(firstName, lastName, age, id, adress){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.id = id;
//     user.adress = adress;
//     user.about = functionDo.about;
//     user.adress = functionDo.adress;
//     return user;
// }
// const user1 = createUsers("Usama", "khan", 24, 1, "malakand");
// const user2 = createUsers("Hamad", "khan", 18, 2, "swabi");
// const user3 = createUsers("Zia ullah", "khan", 29, 3, "skhakot");
// console.log(user1.about())
// console.log(user1.adress())
// console.log(user2.about())

// function inside object and return object using this keyword
// const userMethods = {
//     about : function() {
//         return `name is ${this.firstName} and age is ${this.age}`
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }

// }


// function createUsers(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }
// const user1 = createUsers("Usama","Khan","xyz@gmail.com",24,"malakand");
// const user2 = createUsers("Ali","Khan", "ali@gmail.com", 10, "swat");
// const user3 = createUsers("Mujeeb","Khan","mujeeb@gmail.com",20,"talash");
// const user4 = createUsers("Zia", "Khan", "zia@gmail.com", 50, "skhakot");
// console.log(user1.about());
// console.log(user1.is18())
// console.log(user2.about());
// console.log(user2.is18())

// console.log(user3.is18())
//====================================================================//

// --proto-- 
// to pass a new object as a parameter
// it should first print if the key is present || if not it should check 
// at the nearest or check it at the object we use as a parameter
// object1 creation
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key : "unique"
// }
// const object = {
//     key10 : "value10",
//     key11 : "value11"
// }
// // object2 created
// const obj2 = Object.create(obj1);
// const obj5 = Object.create(object);
// obj2.key3 = "value3";
// obj2.key4 = "value4";
// // output of the keys || objects
// console.log(obj2.key2)
// console.log(obj2)
// console.log(obj2.key4)
// console.log(obj2.key)
// console.log(obj5.key10)
//====================================================================//

// let do one example on --proto--
// const userMethods = {
//     about: function() {
//     return `name is ${this.firstName} ${this.lastName} and age is ${this.age}`
//     },
//     location : function() {
//         return `location is ${this.address}`
//     },
//     digitalLocation : function() {
//         return `email is ${this.email}`
//     }

// }
// function createUsers(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// const usama = createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
// console.log(usama);
// console.log(usama.about());
// console.log(usama.location())
// console.log(usama.digitalLocation())
//=================================================================//

// Now prototype

// inside function their is some space, that space is called prototype
// function hello(email) {
//     console.log("hello world!")
    
// }
// hello("usamakhan@gmail.com");
// hello.prototype.name = "Usama";
// hello.prototype.address = ["hello", "hi!"];
// hello.prototype.email = function() {
//     return `Email is ${email}`;

// }
// console.log(hello.prototype.name);
// console.log(hello.prototype.address)
// const userEmail = hello.prototype.email;

// console.log(userEmail)
//=======================================================================//

// let do one example on --proto--
// const userMethods = {
//     about: function() {
//     return `name is ${this.firstName} ${this.lastName} and age is ${this.age}`
//     },
//     location : function() {
//         return `location is ${this.address}`
//     },
//     digitalLocation : function() {
//         return `email is ${this.email}`
//     }

// }
// prototype example
// function createUsers(firstName, lastName, email, age, address) {
//     const user = Object.create(createUsers.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUsers.prototype.about = function () {
//         return `name is ${this.firstName} ${this.lastName} and age is ${this.age}`
// };
// createUsers.prototype.location = function() {
//         return `location is ${this.address}`
// };
// createUsers.prototype.digitalLocation = function() {
//             return `email is ${this.email}`
// }
// const usama = createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
// console.log(usama);
// console.log(usama.about());
// console.log(usama.location())
// console.log(usama.digitalLocation())
//==================================================================//
// lets do itself prototype example
// function createUsers(firstName, lastName, email, age, address) {
//     const user = Object.create(createUsers.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUsers.prototype.about = function() {
//     return `name is ${this.firstName} ${this.lastName}`;
// };
// createUsers.prototype.email = function () {
//     return `Email is ${this.email}`;
// }

// const usama = createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
// console.log(usama)
// console.log(usama.about());
//=======================================================================//

// new keyword || userMethods
// function users(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }
// users.prototype.about = function() {
//     return `my name is ${this.firstName} and my age is ${this.age}`;
// }
// const usamaDetail = new users('Usama', 24)
// console.log(usamaDetail.about())
//=======================================================================//
// use of new keyword 
// this keyword create new empty object
// also return an object
// function createUsers(firstName, lastName, email, age, address) {
        
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     createUsers.prototype.about = function() {
//         return `My name is ${this.firstName} ${this.lastName}`;
//     };
//     createUsers.prototype.userEmail = function () {
//         return `My Email is ${this.email}`;
//     }
    
//     const usama = new createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
//     console.log(usama)
//     console.log(usama.about());
//     console.log(usama.userEmail())
//======================================================================//

// class keyword
// class createUsers{
//     constructor(firstName, lastName, email, age, address) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about() {
//         return `My name is ${this.firstName} ${this.lastName}`;
//     };
//     userEmail() {
//         return `My Email is ${this.email}`;
//     }
// }

// const usama = new createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
// console.log(usama)
// console.log(usama.about());
// console.log(usama.userEmail())
//======================================================================//

// lets do it by itself
// class createUsers{
//     constructor(firstName, lastName, email, age, address) {
//         console.log('constructor called')
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about() {
//         return `My name is ${this.firstName}`;
//     }
//     age() {
//         return `My age is ${age}`;
//     }
// }

// const user1 = new createUsers('Usama', 'khan', 'usama@gmail.com', 24, 'malakand');
// console.log(user1)
//----------------------------------------------------------------//

// class practice

// class animal{
//     constructor(animalName, animalAge) {
//         this.animalName = animalName;
//         this.animalAge = animalAge;
//     }
//     eat() {
//         return `${this.animalName} can eat, Because it is ready for eating`;
//     }
//     small() {
//         if(this.animalAge < 2){
//             return `it is too small can't eating at this stage. age : (${this.animalAge})`
//         } else if(this.animalAge >= 2 && this.animalAge < 15) {
//             return `he can eat. age is : (${this.animalAge})`
//         } else {
//             return `it is too old we can't say about it. age is : (${this.animalAge})`;
//         }
//     }
// }

// const cat = new animal("Cat", 100)
// console.log(cat.eat())
// console.log(cat.small())
//--------------------------------------------------------------------//

// class with another class (use extends keyword) 
// in js we call it parent or base or super class
class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${name} is eating`;
    }
    
}
// in js we call it subclass or derived class
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age)
        this.speed = speed;
    }
    // Important Note
    // this method is also present in the parent class but it should
    // look first here if not present then search it in the parent class
    eat() {
        return `setting modified... it is running at the speed of ${this.speed} kmph`
    }
    run() {
        return `${this.name} is running at the speed of ${this.speed} kmph`;
    }

}
const animal1 = new Dog('tommy', 3, 35);
console.log(animal1.run())
console.log(animal1.eat())

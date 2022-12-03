// objects Methods //
// this keyword in objects
// function inside objects
// simple program using this keyword
// const userData = {
//     fisrtUserName: 'Usama',
//     age: 24,
//     about: function() {
//         console.log(`User name is ${this.fisrtUserName}, and age is ${this.age}`)
//     }
// }
// userData.about()
//-----------------------------------//

// multiple objects using one function
// outside function declaration
// function userInfo() {
//     console.log(`user name is ${this.firstname}, and age is ${this.age}`)
// }
// // person 1 info
// const person1 = {
//     firstname: 'Usama',
//     age: 24,
//     about: userInfo
// }
// // person 2 info
// const person2 = {
//     firstname: 'Anwar',
//     age: 20,
//     about: userInfo
// }
// // calling person 1
// person1.about()
// // calling person 2
// person2.about()
//==========================================================//

// call method //
function personInfo(favMusic, hobby) {
    console.log(this.name, this.age, favMusic, hobby)
}
const person1 = {
    name: 'Usama',
    age: 24
}
const person2 = {
    name : 'sadat',
    age: 28
}
// call
personInfo.call(person1, "Chill", 'Cricket')
personInfo.call(person2, 'Entertainment', "Football")
// apply 
personInfo.apply(person1, ["Chill", 'Cricket'])
personInfo.apply(person2, ['Entertainment', "Football"])
// bind // return function
const func = personInfo.bind(person1, ["Chill", 'Cricket'])
func()
// important note
// arrow function have not a this function
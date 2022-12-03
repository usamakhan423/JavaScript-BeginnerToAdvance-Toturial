// select element using by id
// const heading = document.getElementById('heading');
// console.log(heading)
////////////////////////////////////////////////////////////
// select element using queryselector
// const heading = document.querySelector('.main-content');
// console.log(heading.innerHTML)
///////////////////////////////////////////////////////////
// to change the html document text by js
// const mainHeading = document.querySelector('#heading');
// console.log(mainHeading.textContent);
// mainHeading.innerHTML = 'This is something else';
// console.log(mainHeading.innerHTML);
//////////////////////////////////////////////////////////
// to change the style of an element
// const mainHeading = document.querySelector('#heading');
// mainHeading.style.color = 'red';
// mainHeading.style.backgroundColor = 'white'
// mainHeading.style.padding = '20px';
// mainHeading.style.borderRadius = '30px 0px'
/////////////////////////////////////////////////////////
// get and set attribute
// const mainHeading = document.querySelector('a');
// // getAttribute
// console.log(mainHeading.getAttribute('href'));
// // setAttribute
// mainHeading.setAttribute("href", 'https://www.google.com');
// // output
// console.log(mainHeading.getAttribute('href'));
////////////////////////////////////////////////////////

// select elements using get element by class name
// note getElementByClassName returns HTMLCOLLECTION
// const navItems = document.getElementsByClassName("nav-item"); // return array like object // HTMLCOLLECTION

// console.log(navItems)
// console.log(navItems[1])
//////////////////////////////////////////////////////////////
// note querySelectorAll return a NodeLists
// const navItems = document.querySelectorAll(".nav-item"); // return NodeList(3)
// console.log(navItems)
//===============================================================//
// DOM using loop
// const btnSecondary = document.getElementByClassName("btnPrimary");
// btnSecondary.style.backgroundColor = "black";

// const navItems = document.querySelectorAll("a");
// // for(let i = 0; i<navItems.length; i++) {
// //     const navItem = navItems[i];
// //     navItem.style.backgroundColor = "#fff";
// //     navItem.style.color = "black";
// //     navItem.style.padding = "5px 10px";
// //     navItem.style.borderRadius = "5px";
// //     navItem.style.fontWeight = "600";
// //     navItem.style.letterSpacing = "1px"
// // }
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.padding = "5px 10px";
//     navItem.style.borderRadius = "5px";
//     navItem.style.fontWeight = "600";
//     navItem.style.letterSpacing = "1px" ;
// }
// ===========================================================//
// working with classList using DOM
// getting class element from HTML Document
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// // to add another class to a HTML element
// sectionTodo.classList.add("new-container");
// console.log(sectionTodo.classList);
// // remove class from HTML element
// sectionTodo.classList.remove("new-container");
// console.log(sectionTodo.classList);
// mainContainer.classLists.add("container");
// console.log(mainContainer);
//============================================================//
// to add new element to an HTML Document || remove elements
// create new li item 
// const newTodoItem = document.createElement("li");
// // add inside text to  li element
// newTodoItem.textContent = "Todo 2";
// // another todo item added to list Items
// const anotherTodoItem = document.createElement("li");
// // text content of the another todo item
// anotherTodoItem.textContent = "Todo 3";
// // getting todo list div using query selector
// const todoList = document.querySelector(".todo-list");
// // appends method added item at the last  
// // todoList.append(newTodoItem);
// // todoList.append(anotherTodoItem);
// // prepend method added the item at the beginning
// todoList.prepend(newTodoItem);
// todoList.prepend(anotherTodoItem)
// console.log(newTodoItem)
//=====================================================//
// apendChild method using DOM
// Getting ul from HTML document
// const ul = document.querySelector(".todo-list");
// // Create new li element
// const newITEM = document.createElement("li");
// // Text content of the li element
// newITEM.textContent = "item 10";
// // Use of appendChild method to insert the new li element
// // ul.appendChild(newITEM);
// // target and getting the element which you want to insert before the element
// const referrenceNode = document.querySelector(".todo-item")
// // Use of insertBefore method 
// ul.insertBefore(newITEM, referrenceNode)
// console.log(ul)
//====================================================//
// Static VS live list
// query selector hamein static list degi
// const todoList = document.querySelector(".todo-list")
// const ul = todoList.querySelectorAll("li");
// const newLi = document.createElement("li");
// newLi.textContent = "New item";
// todoList.appendChild(newLi)
// console.log(ul)

// live list 
// getElementBySomethig hamein live list degi
// getting the targeting element
// const todoList = document.querySelector(".todo-list")
// const ul = todoList.getElementsByTagName("li");

// // Creating new li element
// const newLi = document.createElement("li");
// newLi.textContent = "New item";
// // appendChild method use
// todoList.appendChild(newLi)

// console.log(ul)
//===================================================//
// how to get the dimension of an element
// means height & width
// const todoItem = document.querySelector(".section-todo");
// const info = todoItem.getBoundingClientRect().height;
// console.log(info)
//============================================================//




// Intro to events
// use of addEventListener method
// const button = document.querySelector(".btn");
// // button.addEventListener("click", function() {
// //     console.log("You clicked the Button !!!!")
// // })

// button.addEventListener("click", ()=> {
//     console.log("You clicked !!!!")
// })
//===========================================================//

// working with buttons using loops || working with multiple buttons
// Clicked on multiple buttons
// const allButtons = document.querySelectorAll(".buttons button");
// // console.log(button);
// for(let button of allButtons) {
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }
//===========================================================//
// clicking on btns and ececute some code
// console.log("Program start !!!!")
// const allButtons = document.querySelectorAll(".buttons button");
// allButtons.forEach((btn) => {
//     btn.addEventListener("click", (e)=> {
//         let num = 0;
//         for(let i = 0; i<=100000000; i++) {
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
    
// });
// let outerLoop = 0;
// for(let i = 0; i<=10000000; i++) {
//     outerLoop += i;
// }
// console.log("Outer loop Counts", outerLoop);
// console.log("Program end !!!")
//===========================================================//
// some practice on call back functions using dom and delay the work
// to change the button style with some of the transition
const allButtons = document.querySelectorAll(".buttons button");
allButtons.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
        e.target.style.transition = ".10s ease"
        e.target.textContent = "Button Clicked"
        e.target.style.backgroundColor = "#444";
        e.target.style.color = "#eee";
        e.target.style.padding = "10px";
        e.target.style.borderRadius = "10px"
    })
    
});

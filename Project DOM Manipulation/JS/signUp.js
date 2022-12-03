console.log('hello world');
const signupForm = document.querySelector(".signup-form");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const ConfPassword = document.querySelector("#confirmPassword");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textArea");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value);
    console.log(password.value);
    console.log(ConfPassword.value);
    console.log(email.value)
    console.log(textArea.value)
})
var addButton = document.querySelector("#addBnt");
var inputField = document.querySelector("#inputField");
var newTask = document.querySelector(".addedTask");
addButton.addEventListener('click', function() {
    if(inputField.value.length == 0) {
        alert(`Enter any value!`)
    }
    else {
        newTask.innerHTML += inputField;
    }
})

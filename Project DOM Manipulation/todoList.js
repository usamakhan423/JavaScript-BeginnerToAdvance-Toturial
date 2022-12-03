console.log("Hello world");
const formTodo = document.querySelector(".addYourTodo .form-todo");
const textInput = document.querySelector("#text-input");
const todoList = document.querySelector(".todo-list")

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const newInputText = textInput.value;
  const newLiItem = document.createElement("li");
  const newLiInnerHTML = `<span>${newInputText}</span>
            <div class="btns">
                <button class="btn done">Done</button>
                <button class="btn remove">Remove</button>
            </div>`;
  
  newLiItem.innerHTML = newLiInnerHTML;
  todoList.append(newLiItem);
  console.log(newLiItem)

  textInput.value = "";
});
todoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})

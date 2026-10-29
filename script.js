
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let todoList = document.getElementById("list");
const input = document.querySelector("#todo-input");

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("saved", todos);
}

function render() {
    todoList.innerHTML = "";
    todos.forEach(function(todo, index) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.textContent = todo;
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "✕";
    delBtn.addEventListener("click", function() {
        todos = todos.filter(function(_, i) {
            return i!== index;
        });
        render();
        saveTodos();
    });
    li.appendChild(delBtn);
    todoList.appendChild(li);
});
}

function addBtn() {
    let text = input.value;
    if (!text) {
        return;
    } 
    todos.push(text);
    saveTodos();
    input.value = "";
    render();
}
saveTodos();
render();
















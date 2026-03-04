const form = document.querySelector("form");
const input = document.getElementById("input");
const table = document.getElementById("tBody");

let todos = [];
const savedTodosString = localStorage.getItem("todos");
if(savedTodosString){
    todos = JSON.parse(savedTodosString);
    renderTodos();  
};

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
};

function renderTodos(){
    table.innerHTML = "";

    todos.forEach(function(todo, index) {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        
        td1.textContent = todo.text;
        td2.textContent = todo.status;

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        td3.append(doneBtn, deleteBtn);
        row.append(td1, td2, td3);
        table.append(row);  

        doneBtn.addEventListener("click", function() {
            todos[index].status = "Completed";
            saveTodos();
            renderTodos();
        })
        deleteBtn.addEventListener("click", function(){
            todos.splice(index, 1)
            saveTodos();
            renderTodos();
        })

    })
}

form.addEventListener("submit", function(e) { 
    e.preventDefault();
    const todoInput = input.value.trim();

    if(todoInput === "") return;
    
    const newTodo = {
        text: todoInput,
        status: "Pending"
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();
    input.value = "";
});
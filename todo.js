const form = document.querySelector("form");
const input = document.getElementById("input");
const table = document.getElementById("tBody");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const todoInput = input.value.trim();
    if(todoInput === "") return;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${todoInput}</td>
        <td>Pending</td>
        <td>
            <button class="done-btn" >Done</button>
            <button class="delete-btn">Delete</button>
        </td>

    `;
    table.append(row);
    input.value = "";

    const doneBtn = row.querySelector(".done-btn")
    const deleteBtn = row.querySelector(".delete-btn")

    doneBtn.addEventListener("click", function(){
        row.children[1].textContent = "Completed";
    })

    deleteBtn.addEventListener("click", function(){
        row.remove();
    })

})

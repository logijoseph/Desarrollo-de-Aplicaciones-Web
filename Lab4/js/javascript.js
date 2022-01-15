let submit = document.getElementById("SubmitButton");
let clear = document.getElementById("ClearAllButton");
let mark = document.getElementById("MarkAllButton");
let del = document.getElementById("DeleteAllButton");

submit.addEventListener("click", Submit)
clear.addEventListener("click", Clear)
mark.addEventListener("click", Mark)
del.addEventListener("click", Del)


function Submit(e) {
    e.preventDefault();

    let todo = document.getElementById("todoText").value;
    let list = document.getElementById("todoList");

    let div = document.createElement("div");
    let input = document.createElement("input");
    let label = document.createElement("label");

    input.type = "checkbox";
    input.name = "todo";

    label.textContent = todo;

    div.appendChild(input);
    div.appendChild(label);

    list.append(div)
}

function Clear() {
    let todos = document.getElementsByName("todo")
    for (let i = 0; i < todos.length; i++) {
        todos[i].checked = false
    }
}

function Mark() {
    let todos = document.getElementsByName("todo");
    for (let i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
}

function Del() {
    let todos = document.getElementsByName("todo")

    for (let i = todos.length-1; i >= 0; i--) {
        if (todos[i].checked) {
            todos[i].parentElement.remove()
        }
    }
}
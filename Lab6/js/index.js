let list = document.getElementsByClassName("Lista");
let textArea = document.getElementById("newText");

$("button.agregar").click(function (e) {
    e.preventDefault();

    let div = document.createElement("div");
    let itemName = document.createElement("p");
    let checkButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    itemName.textContent = textArea.value;
    checkButton.textContent = "Check";
    deleteButton.textContent = "Delete";

    itemName.className = "itemShop";
    checkButton.className = "checar";
    deleteButton.className = "del";

    div.className = "lis";
    div.appendChild(itemName);
    div.appendChild(checkButton);
    div.appendChild(deleteButton);

    list[0].appendChild(div);
});

$("button.del").on("click", function (event) {    
    $(this).parent().remove();
})

$("button.checar").on("click", function (event) {    
    $(this).parent().toggleClass("chec");
})
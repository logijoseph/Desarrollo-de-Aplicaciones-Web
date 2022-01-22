let list = document.getElementsByClassName("Lista");
let textArea = document.getElementById("newText");

$(".agregar").click(function (e) {
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

$(document).on("click", "button.del", function () {    
    $(this).parent().remove();
})

$(document).on("click", "button.checar", function () {    
    $(this).parent().toggleClass("chec");
})
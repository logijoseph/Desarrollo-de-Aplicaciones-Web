let temas = ["dog","cat","rabbit","hamster"];

let animalsDiv;
let buttonDiv;

$(document).ready(function() {
    animalsDiv = $("#animals");
    buttonDiv = $("#animal-buttons");

    RefreshAnimalButtons();
    
    $("#add-animal").click(function (e) {
        e.preventDefault();
        temas.push(document.getElementById("animal-input").value);
        RefreshAnimalButtons();
    })

    $("body").on("click","input.animal-button",function () {    
        var term = temas[$(this).index()];
    
        GiphySearch(term);
    })

    $("body").on("click",".animal-item-image",function () {
        var image = $(this);
        var oldImgSrc = image.attr("src");
    
        image.attr("src",image.attr("data-alt"));
        image.attr("data-alt",oldImgSrc);
    })

    function GiphySearch(searchTerm){
        animalsDiv.empty();
    
        let peticion = {
            url:`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=3h1UyqBcPdGYCm9RO1jTlnUTBZc6RX1b&limit=10`,
            success: function(response){
                response.data.forEach(element => {
                    animalsDiv.append(`<div class="animal-item"><p>Rating: ${element.rating}</p><img src="${element.images.fixed_height_still.url}" data-alt="${element.images.fixed_height.url}" class="animal-item-image"></div>`)
                });
            },
            error: function(){
                console.log("Error!");
            }
        }
    
        $.ajax(peticion);
    }

    function RefreshAnimalButtons(){
        buttonDiv.empty();

        for(var i = 0 ; i < temas.length; i++){
            var newButton = document.createElement("input");
            newButton.type = "submit";
            newButton.value = temas[i];
            newButton.className = "animal-button";
            
            console.log("adding");
            buttonDiv.append(`<input class="animal-button" value="${temas[i]}" type="submit">`);
        }
    }
});



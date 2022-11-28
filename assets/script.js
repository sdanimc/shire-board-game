var drinksKey = "1"
var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/" + drinksKey + "/random.php"
var gamesKey = "ev1uDl61ro"
var numPlayers = 4
var gamesUrl = "https://api.boardgameatlas.com/api/search?random=true&gt_max_players=" + numPlayers-- + "&lt_min_players=" + numPlayers++ + "&client_id=" + gamesKey

function fetchDrink() {
    fetch (drinksUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.drinks[0].strIngredient1)
            // Place drink image
            var drinkPic = document.getElementById("drinkpic");
            drinkPic.setAttribute("src", data.drinks[0].strDrinkThumb);
            // Place drink instructions
            var drinkInstruc = document.getElementById("drinkdscrpt");
            drinkInstruc.textContent = data.drinks[0].strInstructions

        })
}

function fetchGame() {
    fetch (gamesUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // Place board game image
            var gamePic = document.getElementById("gamepic");
            gamePic.setAttribute("src", data.games[0].image_url);
            // Place board game description
            var gameDescrip = document.getElementById("gamedscrpt");
            gameDescrip.textContent = data.games[0].description_preview;


        })
}
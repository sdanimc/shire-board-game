var drinksKey = "1"
var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/" + drinksKey + "/random.php"
var gamesKey = "ev1uDl61ro"
var numPlayers = 4
var gamesUrl = "https://api.boardgameatlas.com/api/search?random=true&gt_max_players=" + numPlayers-- + "&lt_min_players=" + numPlayers++ + "&client_id=" + gamesKey

//Variables for pulling ingredients and measurements



function fetchDrink() {
    fetch (drinksUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            drinkData = [data.drinks[0]];
            // Place drink image
            var drinkPic = document.getElementById("drinkpic");
            drinkPic.setAttribute("src", data.drinks[0].strDrinkThumb);
            // Place drink instructions
            var drinkInstruc = document.getElementById("drinkdscrpt");
            drinkInstruc.textContent = data.drinks[0].strInstructions;
            //Fetch ingredients
            ingredientArray = [drinkData[0].strIngredient1, drinkData[0].strIngredient2, drinkData[0].strIngredient3, drinkData[0].strIngredient4, drinkData[0].strIngredient5, drinkData[0].strIngredient6, drinkData[0].strIngredient7, drinkData[0].strIngredient8, drinkData[0].strIngredient9, drinkData[0].strIngredient10,drinkData[0].strIngredient11,drinkData[0].strIngredient12, drinkData[0].strIngredient13,drinkData[0].strIngredient14,drinkData[0].strIngredient15]
            measureArray = [drinkData[0].strMeasure1, drinkData[0].strMeasure2, drinkData[0].strMeasure3, drinkData[0].strMeasure4, drinkData[0].strMeasure5, drinkData[0].strMeasure6, drinkData[0].strMeasure7, drinkData[0].strMeasure8, drinkData[0].strMeasure9, drinkData[0].strMeasure10,drinkData[0].strMeasure11,drinkData[0].strMeasure12, drinkData[0].strMeasure13,drinkData[0].strMeasure14,drinkData[0].strMeasure15]
            ingredientList = document.getElementById("ingredList")
            ingredients = []
            for (i = 0; i < ingredientArray.length; i++){
                // console.log(data.drinks[0])
                console.log(ingredientArray[i])
                if (ingredientArray[i] == null){
                    break
                } else {
                    // console.log(ingredientList)
                    // document.createElement("p") = 
                    ingredients.push(ingredientArray[i]+ ": " +"\n" +measureArray[i])
                }
                string =  ingredients.join("<br />")
                console.log(string)
                ingredientList.innerHTML = string
            //Fetch amounts
            // measurements = []
            // for (i = 0; i < measureArray.length; i++){
            }

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
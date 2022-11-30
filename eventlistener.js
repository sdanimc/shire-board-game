var gameRandomize = document.getElementById('randomGame');
var drinkRandomize = document.getElementById('randomDrink');
var saveButtonGame = document.getElementById('saveGame')
var saveButtonDrink = document.getElementById('saveDrink')
var faveDrinkBtn = document.getElementById('savedDrinks')
var faveGameBtn = document.getElementById('savedGames')
var clearBtn = document.querySelector('.clear-btn');

// Listen for a click event on game button game randomizer
gameRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchGame();

});


// listen for a click event on drink button randomizer
drinkRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchDrink();

});

// listen for a click event on save game button
saveButtonGame.addEventListener("click", function(event){
  event.preventDefault;
  saveGame()
})

// listen for a click event on save drink button
saveButtonDrink.addEventListener("click", function(event){
  event.preventDefault;
  saveDrink()
})

// Populate favorite drink into box
faveDrinkBtn.addEventListener("click", function(event) {
  favedDrink = event.target.id;
  savedDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + favedDrink
  fetchSavedDrink();
})

// Populate favorite game into box
faveGameBtn.addEventListener("click", function(event) {
  if (event.target.localName == "li"){
    favedGame = event.target.id;
    savedGameUrl =
    "https://api.boardgameatlas.com/api/search?name=" +
    favedGame +
    "&client_id=" +
    gamesKey;
    fetchSavedGame()
  } else if (event.target.localName == "span") {
    event.target.parentElement.remove();
    event.stopPropagation();
    gamesStorage = JSON.parse(localStorage.getItem("Saved Games"));
    var localIndex = gamesStorage.indexOf(event.target.parentElement.id);
    gamesStorage.splice(localIndex, 1);
    localStorage.setItem("Saved Games", JSON.stringify(gamesStorage));
  }
})
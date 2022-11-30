var gameRandomize = document.getElementById('randomGame');
var drinkRandomize = document.getElementById('randomDrink');
var saveButtonGame = document.getElementById('saveGame')
var saveButtonDrink = document.getElementById('saveDrink')
var faveDrinkBtn = document.getElementById('savedDrinks')


// Listen for a click event on game button game randomizer
gameRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchGame();

});


// listen for a click event on drink button randomizer
drinkRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchDrink(drinksUrl);

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

faveDrinkBtn.addEventListener("click", function(event) {
  favedDrink = event.target.id;
  savedDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + favedDrink
  fetchSavedDrink();
})
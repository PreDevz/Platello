// Get Today's Date 
let todayMoment = moment();

let dateEl = $("#date")
dateEl.text(todayMoment.format("dddd, MMM DD, YYYY"));
// Toggle theme button 
const toggleThemeBtn = $('#themeBtn')
// Get all DOM elements to change with theme 
let navEl = $('nav')
let preLogo = $('.logo-pre')
let spanEl = $('span')
let sub = $('#subTitle')
let liEl = $('a')
let divEl = $('div')
let iconsEl = $('.material-icons')
let headerEls = $(':header')
let box = $('.box')
let selectedBox = $('.selected')
let CardXIcon = $('.right')
let footer = $('footer')
let Els = [spanEl, sub, divEl, liEl, dateEl]
Els.push(headerEls)
Els.push(iconsEl)
let body = document.querySelector('body');
// the current theme 
let theme = 'dark';

const nav = document.getElementById('nav')

// Check if there is something in localstorage 
function restoreStorage() {
  let themes = localStorage.getItem('theme');
  // if there is no theme, by default give the dark theme 
  if (themes === null) {
    navEl.css('background-color', 'var(--box-drk-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', "'var(--box-drk-clr)'")
      eachBox.css('border', 'var(--box-drk-brder-clr)')
    }
    CardXIcon.css('color', 'black')
    footer.css('background-color', 'var(--drk-clr)')
    footer.css('color', 'var(--lght-clr)')
    preLogo.css('color', 'var(--logo-clr)')
  } else {
    // if there is a theme and if it's light, change all elements to light 
    if (themes === 'light') {
      body.classList.toggle('light-background')
      navEl.css('background-color', 'var(--box-lght-clr)')
      for (i = 0; i < Els.length; i++) {
        Els[i].css('color', 'var(--drk-clr)')
      }
      for (i = 0; i < box.length; i++) {
        let eachBox = $(box[i])
        eachBox.css('background-color', 'var(--box-lght-clr)')
        eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
      }
      selectedBox.css('background-color', 'var(--lght-selected)') 
      footer.css('background-color', 'var(--lght-clr)')
      footer.css('color', 'var(--drk-clr)')
      preLogo.css('color', 'var(--logo-clr)')
      theme = 'light'
    } else return
  }
}
restoreStorage()

// Once button is clicked, toggle theme function will change theme 
function toggleTheme(e) {
  e.preventDefault()
  body.classList.toggle('light-background')
  // WHEN user clicks toggle theme button 
  // if the theme is dark switch to light 
  if (theme === 'dark') {
    navEl.css('background-color', 'var(--box-lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--drk-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-lght-clr)')
      eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
    }
    selectedBox.css('background-color', 'var(--lght-selected)') 
    footer.css('background-color', 'var(--lght-clr)')
    footer.css('color', 'var(--drk-clr)')
    preLogo.css('color', 'var(--logo-clr)')
    theme = 'light'
    // set the current theme value in localstorage 
    localStorage.setItem('theme', theme)
  } else {
      // if the theme is light switch to dark
    navEl.css('background-color', 'var(--box-drk-clr)')
    headerEls.css('color', 'var(--lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-drk-clr)')
      eachBox.css('border', '1px solid var(--box-drk-brder-clr)')
    }
    selectedBox.css('background-color', 'var(--drk-selected)') 
    CardXIcon.css('color', 'black')
    footer.css('background-color', 'var(--drk-clr)')
    footer.css('color', 'var(--lght-clr)')
    preLogo.css('color', 'var(--logo-clr)')
    theme = 'dark'
    // set the current theme value in localstorage 
    localStorage.setItem('theme', theme)
  }
}

// Event Listeners 
toggleThemeBtn.on('click', toggleTheme)

/*
Spoonacular API
For every request to Spoonacular, the first query parameter has to be the API key
Example url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=da1414212d52482cbe9aaf669cae5da3'

Use the following query parameters

sort=random - makes the foods returned random
instructionsRequired=true - recipes must have instructions
addRecipeInformation=true - if set to true, you get more information about the recipe returned
maxReadyTime=30 - the maximum time in minutes it should take to prepare and cook a recipe
excludeIngredients - A comma-separated list of ingredients that the recipes must not contain
cuisine=american+indian+asian+
*/

const testButton = document.querySelector("#test-button");

//testButton.addEventListener("click", getSpoonApi);

let requestUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=da1414212d52482cbe9aaf669cae5da3&sort=random&number=3&instructionsRequired=true&addRecipeInformation=true&maxReadyTime=60&fillIngredients=true&type=main+course"

function getSpoonApi() {

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      const ApiData = data.results;
      //Returns all API info we are receiving
      console.log(ApiData);

      //Generates top three cards with recipes
      for (let i = 0; i < ApiData.length; i++) {

        let cardTitle = ApiData[i].title;
        let prepTime = ApiData[i].readyInMinutes;
        let cardSummary = ApiData[i].summary;
        let cardImage = ApiData[i].image;

        //Card section

        //Changes card images
        const currentCardImg = document.getElementsByClassName("food-card-img");
        currentCardImg[i].src = cardImage;

        //Changes card title
        const currentCardTitle = document.getElementsByClassName("food-card-title");
        currentCardTitle[i].textContent = "";
        currentCardTitle[i].textContent = cardTitle;

        //Change prep time
        const currentPrepTime = document.getElementsByClassName("prep-time");
        currentPrepTime[i].textContent = prepTime + " minutes";

        //Change inside card summary
        const currentCardSummary = document.getElementsByClassName("recipe-summary");
        currentCardSummary[i].innerHTML = "";
        currentCardSummary[i].innerHTML = cardSummary;
      }

      //Variables for generating full recipes below
      const selectRecipeButton1 = document.getElementById("confirm-food-1");
      const selectRecipeButton2 = document.getElementById("confirm-food-2");
      const selectRecipeButton3 = document.getElementById("confirm-food-3"); 
      
      const selectedTitle = document.querySelector(".selected-food-title");
      const selectedImg = document.querySelector(".selected-food-img");
      const selectedServings = document.querySelector("#selected-food-servings");
      const selectedPrepTime = document.querySelector("#selected-food-prep-time");
      const selectedStepList = document.querySelector("#selected-food-steps");
      const selectedIngredientList = document.querySelector(".ingr");

      //Generates generic recipe info at bottom of page
      function createRecipeInfo(recipeNum) {

        //Changes title
        selectedTitle.innerHTML = ApiData[recipeNum].title;
        
        //Changes food img
        selectedImg.src = ApiData[recipeNum].image;

        //Changes amount of servings
        selectedServings.innerHTML = ApiData[recipeNum].servings;

        //Changes prep time
        selectedPrepTime.innerHTML = ApiData[recipeNum].readyInMinutes + " minutes";

        //Changes ingredients
        selectedIngredientList.replaceChildren();
      }

      //Generates ingredients list at bottom of page
      function createRecipeIngredients(recipeNum) {
        for (let i = 0; i < ApiData[recipeNum].analyzedInstructions[0].steps.length; i++) {

          let selectedIngredients = ApiData[recipeNum].extendedIngredients[i].original;

          let ingredient = document.createElement("li");
          ingredient.textContent = "";
          ingredient.textContent = selectedIngredients;

          selectedIngredientList.append(ingredient);
        }
      }

      //Generates recipe steps at bottom of page
      function createRecipeSteps(recipeNum) {
        selectedStepList.replaceChildren();
        
        for (let i = 0; i < ApiData[recipeNum].analyzedInstructions[0].steps.length; i++) {

          let selectedSteps = ApiData[recipeNum].analyzedInstructions[0].steps[i].step;

          const step = document.createElement("li");
          step.textContent = selectedSteps;

          selectedStepList.append(step);
        }
      }

      //JS for 'View recipe' button in food card 1
      selectRecipeButton1.addEventListener("click", () => {
        console.log("Recipe 1 has been printed");

        createRecipeInfo(0);

        createRecipeSteps(0)

        createRecipeIngredients(0);
        
      });

      //JS for 'View recipe' button in food card 2
      selectRecipeButton2.addEventListener("click", () => {
        console.log("Recipe 2 has been printed");

        createRecipeInfo(1);

        createRecipeSteps(1)

        createRecipeIngredients(1);

      });

      //JS for 'View recipe' button in food card 3
      selectRecipeButton3.addEventListener("click", () => {
        console.log("Recipe 3 has been printed");

        createRecipeInfo(2);

        createRecipeSteps(2)

        createRecipeIngredients(2);

      });

    })

}



// ```````````````````````````generating cocktail```````````````````````````````````

// drinksArray is generated based on the user selection of base ingredients (Gin, Rum, Tequila, Vodka, Whiskey, and Wine)
let drinksArray = ["rum", "gin", "vodka", "tequila", "wine", "whiskey"]




// main function of fetching all data from the API and generating cocktails based on user choices
function getDrink() {

  //Selecting one random base ingredient from the drinksArray 
  let randomBase = Math.floor(Math.random() * drinksArray.length);

  //Fetching info from the API based on base ingredient 
  let baseIngredient = drinksArray[randomBase]
  console.log(baseIngredient);

  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + baseIngredient)
    .then(response => {
      return response.json()
    })
    .then((data) => {
      console.log(data)

      //Calls for and replaces the data from "drinkcard" in the index 
      let drinkCard = document.querySelectorAll(".drinkcard")

      let randomNum = Math.floor(Math.random() * data.drinks.length);

      let usedNumbers = [];

      while (usedNumbers.length < 3) {
        if (!usedNumbers.includes(randomNum)) {
          usedNumbers.push(randomNum)
        } else {
          randomNum = Math.floor(Math.random() * data.drinks.length)
        }
      }

      for (let i = 0; i < drinkCard.length; i++) {

        //Randomizes 3 random cocktails based on base ingredient. changes titles and images of cocktails 
        const drinkImage = data.drinks[usedNumbers[i]].strDrinkThumb
        const currentDrinkImg = document.getElementsByClassName("drink-image");
        currentDrinkImg[i].src = drinkImage;

        // Adds drink title to card    
        const drinkTitle = data.drinks[usedNumbers[i]].strDrink
        const currentDrinkTitle = document.getElementsByClassName("drink-card-title");
        currentDrinkTitle[i].textContent = drinkTitle;

        // Adds base ingredient needed below the title 
        const currentDrinkBase = document.getElementsByClassName("base-ingredient-needed");
        currentDrinkBase[i].textContent = "Base Ingredient:   " + baseIngredient;

        //Id of specific drink, used to make another request to the API with further instructions
        let drinkId = data.drinks[i].idDrink

        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
          .then(response => {
            return response.json()
          })

          .then((idData) => {
            console.log(idData)

            //Adds ingredients to each individual drink card
            let cardIngredients = document.getElementsByClassName("card-ingredients");

            for (j = 1; j < 16; j++) {
              let drinkIngredient = idData.drinks[0]["strIngredient" + j]
              if (drinkIngredient) {
                const li = document.createElement("li")
                li.textContent = drinkIngredient
                cardIngredients[i].append(li)
              }
            }

          }
          )
      }
    }
    )
}

// first attempt to create a function to transfer the data from the drink cards to the user selection area 
// leaving it on here just in case. not affecting the code. 
let selectedDrink1 = document.getElementById("confirm-drink-1");
let selectedDrink2 = document.getElementById("confirm-drink-2");
let selectedDrink3 = document.getElementById("confirm-drink-3");

const selectedDrinkTitle = document.querySelector(".selected-drink-title");
const selectedDrinkImage = document.querySelector(".selected-drink-img");
const selectedDrinkIngredients = document.querySelector(".drink-ingr");
const selectedDrinkInstructions = document.querySelector("#selected-drink-steps");

const userSelectedDrinkArea = document.querySelector("#user-selected")

  

// once the user clicks on the first drink button 
    selectedDrink1.addEventListener("click", () => {

  // calling for drinkcard1 in the html 
    let card1 = document.getElementById("drinkCard1");
    console.log(card1);
// finds the image from the card and then transfers it to the user selection screen 
    var findCardImg1 = $(card1).find(".drink-image");
    var CardImg1 = $(findCardImg1).attr("src");
    let selectedCardImg = document.getElementById("drinkImageSelector");
    $(selectedCardImg).attr("src",CardImg1)

  // finds the title from the card and then transfers it to the user selection screen.   
    var findTitle1 = $(card1).find("#drinkTitle1").text();
    console.log(findTitle1);
    let selectedCardTitle = document.getElementById("drinkTitleSelector");
    $(selectedCardTitle).text(findTitle1)
  })

// once the user clicks on the second drink button
  selectedDrink2.addEventListener("click", () => {
    
// finds the image from the card and then transfers it to the user selection screen
    let card2 = document.getElementById("drinkCard2");    
    var findCardImg2 = $(card2).find(".drink-image");
    var CardImg2 = $(findCardImg2).attr("src");
    let selectedCardImg = document.getElementById("drinkImageSelector");   
    $(selectedCardImg).attr("src",CardImg2)

// finds the title from the card and then transfers it to the user selection screen.
    var findTitle2 = $(card2).find("#drinkTitle2").text();
    console.log(findTitle2);
    let selectedCardTitle = document.getElementById("drinkTitleSelector");
    $(selectedCardTitle).text(findTitle2)  
  })

// once the user clicks on the third drink button
  selectedDrink3.addEventListener("click", () => {
    
// finds the image from the card and then transfers it to the user selection screen
    let card3 = document.getElementById("drinkCard3");    
    var findCardImg3 = $(card3).find(".drink-image");    
    var CardImg3 = $(findCardImg3).attr("src");
    let selectedCardImg = document.getElementById("drinkImageSelector");
    $(selectedCardImg).attr("src",CardImg3)

// finds the title from the card and then transfers it to the user selection screen.
    var findTitle3 = $(card3).find("#drinkTitle3").text();
    console.log(findTitle3);
    let selectedCardTitle = document.getElementById("drinkTitleSelector");
    $(selectedCardTitle).text(findTitle3)

  })














getDrink()





      
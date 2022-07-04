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


// --------------------------------------------------------------------------------------------------------
//  Drink api fetch


// 3) randomize 3 cocktails based on Selection, display image and title

// 4) allow user to select one of three
// 5) allow user to favorite 1 Daily 
// 6) repeat randomizer for following day 


// fetching info from the API based on base ingredient.
// Our website consists of 6 base ingredients users can select from: Gin, Rum, Tequila, Vodka, Whisky, and Wine

let drinksArray = ["rum", "gin", "vodka", "tequila", "wine", "whisky"]


function getDrink() {

  let randomBase = Math.floor(Math.random() * drinksArray.length);
  console.log(randomBase);


  let baseIngredient = drinksArray[randomBase]
  console.log(baseIngredient);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + baseIngredient)
    .then(response => {
        return response.json()
    })
    .then((data) => {
    console.log(data)
    // console.log(data ? JSON.parse(data) : {})

    // console.log(baseIngredient)



    let drinkCard = document.querySelectorAll(".drinkcard")
    console.log(drinkCard);
    
    for (i = 0; i < drinkCard.length; i++) {
      // console.log("id = " + i);


    
    let drinkCardImage = drinkCard 

      // Adds drink image to card
      
      let randomNum = Math.floor(Math.random() * data.drinks.length);
      const drinkImage = data.drinks[randomNum].strDrinkThumb
      const currentDrinkImg = document.getElementsByClassName("drink-image");
      currentDrinkImg[i].src = drinkImage;
      console.log(randomNum);

      // Adds drink title to card
      
      const drinkTitle = data.drinks[randomNum].strDrink
      const currentDrinkTitle = document.getElementsByClassName("drink-card-title");
      currentDrinkTitle[i].textContent = drinkTitle;


    

      // // three randomized drinks the user will get based on base ingredient choices
      let drinkId = data.drinks[i].idDrink
      // console.log(drinkId);

      // let id2 = data.drinks["2"].idDrink
      // console.log(id2)
      
      // let id3 = data.drinks["3"].idDrink
      // console.log(id3)

      // after we fetched all the drinks from the previous fetch requestUrl, we are now fetching more details
      // of the cocktails based on their cocktail IDs from the api. This fetch provides us with all the other ingredients needed
      // as well as instructions and an image of the cocktail
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
      .then(response => {
        return response.json()
      })
      .then((idData) => {
        // console.log(idData)

        let cardIngredients = document.getElementsByClassName("card-ingredients");
        for(j = 0; j <= 2; j++) {
          // console.log(j)
          // console.log(cardIngredients[j])

          // Loop through all 15 possible ingredients per cocktail in the API
          
            // Get each ingredient
            // console.log(idData.drinks[0].strIngredient1)

            let maxIngredient = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            for(k = 0; k <= 15; k++) {
              const drinkIngredient = idData.drinks[0]["strIngredient" + k]
              if (drinkIngredient) {
                const li = document.createElement("li");
                li.innerText = drinkIngredient;
                cardIngredients[j].appendChild(li);
              }
               // console.log(drinkIngredient);
              
            }

            
            // console.log("strIngredient" + k);

            // If there is an ingredient, add it to the list of ingredients on the card
           
          
        }

      })

      
    }

    // fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id2)
    // .then(response => {
    //   return response.json()
    // })
    // .then((idData2) => {
    //   console.log(idData2)
    // })
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id3)
    // .then(response => {
    //   return response.json()
    // })
    // .then((idData3) => {
    //   console.log(idData3)
    // })
    })

  }

getDrink()
  


// getDrink("gin")
// getDrink("tequila")
// getDrink("vodka")
// getDrink("wine")
// getDrink("rum")
// getDrink("whiskey")
// getDrink("")

//     // What will be displayed in the drink card 
//     for (let i = 0; i < idData.length; i++) {

//       let drinkName = strDrink[i].name;
//       let drinkImg = strDrinkThumb[i].drinkImage;
  
//     }

//     for (let i =0; i < idData2.length; i++) {

//       let drinkName = strDrink[i].name;
//       let drinkImg = strDrinkThumb[i].drinkImage;
//     }

//     for (let i =0; i < idData3.length; i++) {

//       let drinkName = strDrink[i].name;
//       let drinkImg = strDrinkThumb[i].drinkImage;
//     }




// }

// function getDrinkDetails(id) {
//   fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
//     .then(response => {
//       return response.json()
//     })
//     .then((data) => {
//       return data
//     })
// }

// function getDrinkByBase(baseIngredient) {
//  return fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + baseIngredient)
//     .then(response => {
//         return response.json()
//     })
//     .then((data) => {
//       data
//     })
// }

// getDrinkByBase("gin").then(response => console.log(response))

// getDrinkByBase("gin")




// for (let i = 0; i < data.length; i++) {
  
// const selectCocktail1 = document.getElementById("confirm-drink-1");
// const selectCocktail2 = document.getElementById("confirm-drink-2");
// const selectCocktail3 = document.getElementById("confirm-drink-3");


// function createDrink {


// }


// if strIngredient = null
// then don't include


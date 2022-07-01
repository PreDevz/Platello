// Get Today's Date 
let todayMoment = moment();

let dateEl = $("#date")
dateEl.text(todayMoment.format("dddd, MMM DD, YYYY"));
// Toggle theme button 
const toggleThemeBtn = $('#themeBtn')
// Get all DOM elements to change with theme 
let navEl = $('nav')
let headerEl = $('header')
let containerDiv = $('.container')
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
// Togglers 
let theme = 'dark';

// Modals 
let IsModalOpen = false
// storing the user's meals they have selected 
// let storedUserMeals = ['Chinese', 'Indian', 'Japanese', 'Korean', 'Middle Eastern', 'Thai', 'Vietnamese', 'American', 'Cajun', 'Mexican', 'Southern', 'British', 'French', 'German', 'Greek', 'Irish', 'Italian', 'Nordic', 'Eastern European', 'African', 'Caribbean', 'Jewish', 'Latin American', 'Mediterranean']
let storedUserMeals = []

// Check if there is something in localstorage 
function restoreStorage() {

  // Changing Theme 

  let themes = localStorage.getItem('theme');

  // Gets the theme in the localstorage 
  // if there is no theme, by default give the dark theme 
  if (themes === null) {
    navEl.css('background-color', 'var(--box-drk-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }

    // change boxes styles 
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', "'var(--box-drk-clr)'")
      eachBox.css('border', 'var(--box-drk-brder-clr)')
    }
    CardXIcon.css('color', 'black')

    // change footer styles 
    footer.css('background-color', 'var(--drk-clr)')
    footer.css('color', 'var(--lght-clr)')
    preLogo.css('color', 'var(--logo-clr)')

    // if there is something in local storage
    // check what color the user pick for the theme
  } else {

    // if there is a theme and if it's light, change all elements to light 
    if (themes === 'light') {
      body.classList.toggle('light-background')
      // change nav and all element's text styles 
      navEl.css('background-color', 'var(--box-lght-clr)')
      for (i = 0; i < Els.length; i++) {
        Els[i].css('color', 'var(--drk-clr)')
      }

      // change boxes styles 
      for (i = 0; i < box.length; i++) {
        let eachBox = $(box[i])
        eachBox.css('background-color', 'var(--box-lght-clr)')
        eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
      }
      selectedBox.css('background-color', 'var(--lght-selected)') 

      // change footer styles 
      footer.css('background-color', 'var(--lght-clr)')
      footer.css('color', 'var(--drk-clr)')
      preLogo.css('color', 'var(--logo-clr)')
      theme = 'light'
    } else {
      // if there is something in local storage
      // and the user left off on dark mode 

      // change nav and all element's text styles 
      navEl.css('background-color', 'var(--box-drk-clr)')
      for (i = 0; i < Els.length; i++) {
        Els[i].css('color', 'var(--lght-clr)')
      }
      // change boxes styles 
      for (i = 0; i < box.length; i++) {
        let eachBox = $(box[i])
        eachBox.css('background-color', "'var(--box-drk-clr)'")
        eachBox.css('border', 'var(--box-drk-brder-clr)')
      }
      CardXIcon.css('color', 'black')

      // change footer styles 
      footer.css('background-color', 'var(--drk-clr)')
      footer.css('color', 'var(--lght-clr)')
      preLogo.css('color', 'var(--logo-clr)')
    }
  }
}

restoreStorage()
// localStorage.clear()

// Once button is clicked, toggle theme function will change theme 
function toggleTheme(e) {
  e.preventDefault()
  body.classList.toggle('light-background')

  // WHEN user clicks toggle theme button 
  // if the theme is dark switch to light 
  if (theme === 'dark') {
    
    // change nav and all element's text styles 
    navEl.css('background-color', 'var(--box-lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--drk-clr)')
    }

    // change boxes styles 
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-lght-clr)')
      eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
    }
    selectedBox.css('background-color', 'var(--lght-selected)') 

    // change footer styles 
    footer.css('background-color', 'var(--lght-clr)')
    footer.css('color', 'var(--drk-clr)')
    preLogo.css('color', 'var(--logo-clr)')
    theme = 'light'

    // set the current theme value in localstorage 
    localStorage.setItem('theme', theme)
    // if the theme is light switch to dark
  } else {

    // change nav and all element's text styles 
    navEl.css('background-color', 'var(--box-drk-clr)')
    headerEls.css('color', 'var(--lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }

    // change boxes styles 
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-drk-clr)')
      eachBox.css('border', '1px solid var(--box-drk-brder-clr)')
    }
    selectedBox.css('background-color', 'var(--drk-selected)') 
    CardXIcon.css('color', 'black')

    // change footer styles 
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
        selectedServings.innerHTML = "Servings: " + ApiData[recipeNum].servings;

        //Changes cook time
        selectedPrepTime.innerHTML = "Cook Time: " + ApiData[recipeNum].readyInMinutes + " minutes";

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



//  Drink api fetch
// function getDrink(baseIngredient) {
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + baseIngredient)
//     .then(response => {
//         return response.text()
//     })
//     .then((data) => {
//     console.log(data ? JSON.parse(data) : {})
//     })
// }

// getDrink("gin")
// getDrink("tequila")
// getDrink("vodka")
// getDrink("wine")
// getDrink("rum")
// getDrink("whiskey")
// getDrink("")






//         getDrink("gin")
//         getDrink("tequila")
//         getDrink("vodka")
//         getDrink("wine")
//         getDrink("rum")
//         getDrink("whiskey")
//         getDrink("")
        
    

// 3) radnomize 3 cocktails based on Selection
// 4) allow user to select one of three
// 5) allow user to favorite 1 Daily
// 6) repeat randomizer for following day



/* Removing the class 'open' from the modal and the class 'blur' from the container. */
// $('.close').on('click', function () {
//     $('.modal').removeClass('open');
//     $('.container').removeClass('blur');
// });



/* once the document loads, it will check if the user has visited this page before, if not it will show the modal.
   also make the modal not close when a user clicks outside of the box. when the user clicks the next button it
   will go to the next modal.
   */
// $(document).ready(function () {
//   /* Checking to see if the modal has been shown before. If it has not, it will show the modal. If it
//   has, it will not show the modal. */
//   if (localStorage.getItem('.modal-Intro') !== 'true') {
//     $('.modal-Intro').modal('show')
//     localStorage.setItem('modal-Intro', 'true')
//   }

//   /* Creating a modal that will not close when the user clicks outside of the modal or presses the escape
//   key. */
//   $('.modal-Intro').modal({ backdrop: 'static', keyboard: false })
// })


// Modal Functionality

// testing variable 
let isUserNew = true

// check if there is a users meal preference
function restoreMealsData() {

  // get the stored meals the user prefers 
  let storedMeals = JSON.parse(localStorage.getItem('UserPreferredMeal'))

  // if nothing is stored, then change new user variable to true 
  if (storedMeals === null) {
    isUserNew = true
  }
  console.log(storedMeals)
}

// Call on start 
restoreMealsData()

// WHEN the DOM is fully loaded excute Materialize Elements
document.addEventListener('DOMContentLoaded', function () {

  // store the classes for each cuisine for looping
  let cuisines = ['.asian-cuisines', '.north-america', '.europe-cuisines', '.more-option']

  // loop through each cuisine's options to initialize  
  for (i = 0; i < cuisines.length; i++) {

    // get each class section for each cuisine 
    var el = document.querySelectorAll(cuisines[i]);
    let init = $(el).formSelect();
    let inst = M.FormSelect.getInstance(init);

    // when user clicks
    $('#foodSave').on('click', () => {

      // get the values 
      let allSelected = inst.getSelectedValues();

      // loop to push each value into variable for localstorage 
      for (i = 0; i < allSelected.length; i++) {
        storedUserMeals.push(allSelected[i])
      }
      
      // add to storage
      setTimeout(() => {
        saveUserMealPref()
      }, 200);

    });
    }
});

// seperate function to store the users referrences 
function saveUserMealPref() {

    // save to localstorage 
    localStorage.setItem('UserPreferredMeal', JSON.stringify(storedUserMeals))
}

// Function to check if the user is new 
function isTheUserNew() {

  // if the user is new, call welcome function 
  if (isUserNew === true) {
    welcomeModal()
  }
}
// isTheUserNew()

// functions for each modal

// Starting welcome modal 
function welcomeModal() {

  // get welcome modal element 
  let modal = document.querySelector('.modal-welcome');
  IsModalOpen = true 

  // toggle the hidden class to unhide 
  modal.classList.toggle('hidden')

  // get the modal's button 
  let modalBtn = $(modal).children().children('button')
  // when clicked, it will add cool effect and call the food function 
  $(modalBtn).on("click", function (e) {
    e.preventDefault()

    // adds slide effect then hides completely
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      foodModal()
    }, 750)
  })
}

// Call on start 
foodModal()


// the Food modal function will get info from the user 
function foodModal() {

  // get food modal element 
  let modal = document.querySelector('.modal-food')
  IsModalOpen = true 

  // toggle the hidden class to unhide 
  modal.classList.toggle('hidden')

  // get the modal's button 
  let modalBtn = $(modal).children().children('button')

  // when clicked prevent default 
  $(modalBtn).on("click", function (e) {
    e.preventDefault()

    // adds slide effect then hides completely
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      IsModalOpen = false

      // call drink function since it's user's first time 
      drinkModal()
    }, 750)
  })
}

// the drink function will store the user's favorite drinks 
function drinkModal() {

  // get food drinks element 
  let modal = document.querySelector('.modal-drink');
  IsModalOpen = true 

  // toggle the hidden class to unhide
  modal.classList.toggle('hidden')

  // get the modal's button 
  let modalBtn = $(modal).children().children('button')

  // when clicked prevent default 
  $(modalBtn).on("click", function (e) {
    e.preventDefault()

    // adds slide effect then hides completely
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      IsModalOpen = false

      // calls blurbackground to check if modal is open 
      blurBackgroundIf()
    }, 750)
  })
}

// Function that will blur the background if a modal is active 
function blurBackgroundIf() {

  // check if the a modal is open 
  if (IsModalOpen === true) {
    // if true, remove navbar, add blur to container and header section 
    $('#navbar').css('display', 'none')
    containerDiv.addClass('blur')
    headerEl.addClass('blur')
    document.body.style.overflow = 'hidden'
  } else {

    // if false, make navbar flex, remove blur on elements 
    // slide down the navbar 
    $('#navbar').css('display', 'flex')
    $('#navbar').addClass('slide-down')

    // after animation is done, then it will officially change the nav style to 0 on the y axis 
    setTimeout(() => {
      $('#navbar').css('transform', "translateY(0px)")
    }, 500)

    // blur contents on page, and make body flow auto to scroll 
    containerDiv.removeClass('blur')
    headerEl.removeClass('blur')
    document.body.style.overflow = 'auto'
  }
}

// Call on start 
blurBackgroundIf()
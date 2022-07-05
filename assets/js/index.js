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
let modalTitles = $('.modalText')
// Togglers 

// Check if there is something in localstorage 
const logo = document.querySelector("#platello-logo")
// the current theme
let theme = 'dark';

const nav = document.getElementById('nav')

// Check if there is something in localstorage
function restoreStorage() {

  // Changing Theme 

  let themes = localStorage.getItem('theme');

  // Gets the theme in the localstorage 
  // if there is no theme, by default give the dark theme 
  if (themes === null) {
    navEl.css('background-color', 'var(--box-drk-clr)')
    
    //Changes logo color
    logo.classList.remove('light-logo');
    logo.classList.add('platello-logo');

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

    // modal title
    modalTitles.css('color', 'var(--lght-clr)')

    // if there is something in local storage
    // check what color the user pick for the theme
  } else {

    // if there is a theme and if it's light, change all elements to light 
    if (themes === 'light') {
      body.classList.toggle('light-background')

      //Changes logo color
      logo.classList.remove('platello-logo');
      logo.classList.add('light-logo');
      
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

      // modal title
      modalTitles.css('color', 'var(--lght-clr)')

      theme = 'light'
    } else {
      // if there is something in local storage
      // and the user left off on dark mode

      //Changes logo color
      logo.classList.remove('light-logo');
      logo.classList.add('platello-logo');

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

      // modal title
       modalTitles.css('color', 'var(--lght-clr)')
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

    //Changes logo color
    logo.classList.remove('platello-logo');
    logo.classList.add('light-logo');

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

    // modal title
    modalTitles.css('color', 'var(--lght-clr)')
    
    theme = 'light'

    // set the current theme value in localstorage
    localStorage.setItem('theme', theme)
    // if the theme is light switch to dark
  } else {

    //Changes logo color
    logo.classList.remove('light-logo');
    logo.classList.add('platello-logo');

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

    // modal title
    modalTitles.css('color', 'var(--lght-clr)')
    
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
commas in URLs are written as '%2C'
*/

//Retrieves user stored food preferences from localStorage
function getFoodPreferences() {
  let meals = JSON.parse(localStorage.getItem('UserPreferredMeal'));
  console.log("Your cuisines are: ");
  console.log(meals)

  let modifiedMeals = [];

  //Iterates through saved preferences and modifies them into workable strings for use in requestUrl
  if (meals != null) {
    for (i = 0; i < meals.length; i++) {
      let modifiedMeal = meals[i].toLowerCase().split(" ").join("+") + "%2C"
      modifiedMeals.push(modifiedMeal)
    }
  } 

  modifiedMeals = modifiedMeals.join("")

  return modifiedMeals
}

//Retrieves user stored food exclusions from localStorage
function getFoodExclusions() {
  let exclusions = JSON.parse(localStorage.getItem('UserExcludes'));
  console.log("Your exclusions are: ");
  console.log(exclusions)

  let modifiedExclusions = [];

  //Iterates through saved exclusions and modifies them into workable strings for use in requestUrl
  if (exclusions != null) {
    for (i = 0; i < exclusions.length; i++) {
      let modifiedExclusion = exclusions[i].toLowerCase().split(" ").join("+") + "%2C"
      modifiedExclusions.push(modifiedExclusion)
    }
  } 

  modifiedExclusions = modifiedExclusions.join("")

  return modifiedExclusions
}

//requestUrl variables
//Modify these however you like for testing purposes
const apiKey = "apiKey=da1414212d52482cbe9aaf669cae5da3&";
const sort = "sort=random&";
const numOfRecipes = "number=3&";
const instructionsRequired = "instructionsRequired=true&";
const addRecipeInfo = "addRecipeInformation=true&";
const maxReadyTime = "maxReadyTime=60&";
const fillIngredients = "fillIngredients=true&";
const foodTypes = "type=main+course&";

let cuisines = getFoodPreferences();
let exclusions = getFoodExclusions();

let requestUrl = "https://api.spoonacular.com/recipes/complexSearch?" + apiKey + sort + "cuisine=" + cuisines + "&excludeIngredients=" + exclusions + "&" + numOfRecipes + instructionsRequired + addRecipeInfo + maxReadyTime + fillIngredients + foodTypes;

let foodData;

function getSpoonApi() {
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      const ApiData = data.results;
      console.log(ApiData);

      localStorage.setItem('foodData', JSON.stringify(ApiData))

      setTimeout(() => {
        document.location.reload(true)
      }, 750)

      return ApiData
    })
}

//Will retrieve data retrieved from api in local storage
function retrieveFoodData() {
  foodData = JSON.parse(localStorage.getItem('foodData'))
}

retrieveFoodData()

//Will generate all cards and "selected" section below the page
function generateFoodInfo() {
  console.log("Food data:\n -------------")
  console.log(foodData)
  //Generates top three cards with recipes
  for (let i = 0; i < foodData.length; i++) {

    const cardTitle = foodData[i].title;
    const prepTime = foodData[i].readyInMinutes;
    const cardSummary = foodData[i].summary;
    const cardImage = foodData[i].image;

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
    selectedTitle.innerHTML = foodData[recipeNum].title;

    //Changes food img
    selectedImg.src = foodData[recipeNum].image;

    //Changes amount of servings
    selectedServings.innerHTML = "Servings: " + foodData[recipeNum].servings;

    //Changes cook time
    selectedPrepTime.innerHTML = "Cook Time: " + foodData[recipeNum].readyInMinutes + " minutes";

    //Changes ingredients
    selectedIngredientList.replaceChildren();
  }

  //Generates ingredients list at bottom of page
  function createRecipeIngredients(recipeNum) {
    for (let i = 0; i < foodData[recipeNum].analyzedInstructions[0].steps.length; i++) {

      let selectedIngredients = foodData[recipeNum].extendedIngredients[i].original;

      let ingredient = document.createElement("li");
      ingredient.textContent = "";
      ingredient.textContent = selectedIngredients;

      selectedIngredientList.append(ingredient);
    }
  }

  //Generates recipe steps at bottom of page
  function createRecipeSteps(recipeNum) {
    selectedStepList.replaceChildren();

    for (let i = 0; i < foodData[recipeNum].analyzedInstructions[0].steps.length; i++) {

      let selectedSteps = foodData[recipeNum].analyzedInstructions[0].steps[i].step;

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

}

if (localStorage.foodData != null) {
  generateFoodInfo()
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



// Modal Functionality

// Modal variables 
let isUserNew = false
let IsModalOpen = false
let storedUserMeals = []
let mealsState = []
let storedUserExclude = []
let excludeState

// check if there is a users meal preference
function restoreMealsData() {

  // get the stored meals the user prefers 
  let storedMeals = JSON.parse(localStorage.getItem('UserPreferredMeal'))

  // get the stored exludes 
  let storedExcludes = JSON.parse(localStorage.getItem('UserExcludes'))
  // console.log(storedExcludes)

  // if nothing is stored, then change new user variable to true 
  if (storedMeals === null) {
    isUserNew = true
    isTheUserNew()
  }
  else {
   storedUserMeals = storedMeals
  }

  // check the exludes to add to the dom 
  if (storedExcludes === null) {
    return 
  } else {
    $('#textareaRemove').text(storedExcludes)
  }
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
         mealsState.push(allSelected[i])
        }
      
      // add to storage
      setTimeout(() => {
        saveUserMealPref()
      }, 100);

    });
    }
});

// testing function 
// localStorage.clear()

// Function to check if the user is new 
function isTheUserNew() {

  // if the user is new, call welcome function 
  if (isUserNew === true) {
    welcomeModal()
    isUserNew = false
  }
}

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

    // adds slide effect then hides completely
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      foodModal()
    }, 750)
  })
}

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

    // Get textarea value
    let exclude = itemsToExclude()
    // get the value empty or Not
      saveUserMealPref()

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

// function to get excluded items 
function itemsToExclude() {
  let excludeState = $('#textareaRemove').val().split(',')
  storedUserExclude = excludeState

  // return value back to food modal
  return storedUserExclude
}
itemsToExclude()

// seperate function to store the users referrences 
function saveUserMealPref() {

  // save user's input to exclude 
  localStorage.setItem('UserExcludes', JSON.stringify(storedUserExclude))

  // save user's selected cuisines 
  storedUserMeals = mealsState
  localStorage.setItem('UserPreferredMeal', JSON.stringify(storedUserMeals))
}

// Drinks 

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

    // adds slide effect then hides completely
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      IsModalOpen = false

      // calls blurbackground to check if modal is open 
      blurBackgroundIf()
    }, 750)

    getSpoonApi()

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
    // body.style.overflow = 'hidden'
    $('html').css('overflow', 'hidden')
  } else {

    // if false, make navbar flex, remove blur on elements 
    // slide down the navbar 
    $('#navbar').css('display', 'flex')
    $('#navbar').addClass('slide-down')

    // after animation is done, then it will officially change the nav style to 0 on the y axis 
    setTimeout(() => {
      $('#navbar').css('transform', "translateY(0px)")
    }, 875)

    // blur contents on page, and make body flow auto to scroll 
    containerDiv.removeClass('blur')
    headerEl.removeClass('blur')
    // document.body.style.overflow = 'auto'
    $('html').css('overflow-y', 'auto')
  }
}

// Call on start 
blurBackgroundIf()

// global drink variables 
var userDrinks = document.getElementById('user-drink-values');
var text = 'You have selected: ';
var drinksArray = [];
var checkboxes = document.querySelectorAll('.checkbox');

// This checks if the checkboxes are checked or not and add/remove from the array
function checkState() {
  /* Creating a loop that will run through all the checkboxes and add an event listener to each one. */
  for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
      /* Checking if the checkbox is checked. */
      if (this.checked == true) {
        console.log(this.value);
        console.log('this is checked');
        
        /* Pushing the value of the input field into the drinksArray. */
        drinksArray.push(this.value);
        
        /* Joining the array with a / in between each element. */
        userDrinks.textContent = text + drinksArray.join(' / ');

        console.log(drinksArray)
      } else {
        console.log(this.value);
        console.log('this is unchecked');
        
        /* Using the filter() method creates a new array with all elements that pass,
        filtering out the value of the checks that was clicked. */
        drinksArray = drinksArray.filter(e => e !== this.value);
        
        /* Joining the array with a / in between each element. */
        userDrinks.innerHTML = text + drinksArray.join(' / ');
        


        console.log(drinksArray);
      }

      /* Storing the drinksArray in local storage. */
      localStorage.setItem('drinksArray', JSON.stringify(drinksArray));
      var storedDrinks = JSON.parse(localStorage.getItem('drinksArray'));

    })
  }
}

checkState()

//If the user already has saved preferences, it'll load recipes
// if (localStorage.UserPreferredMeal != null) {
//   getSpoonApi()
// }

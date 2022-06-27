// Get Today's Date 
let todayEl = moment();
$("#date").text(todayEl.format("dddd, MMM DD, YYYY"));
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
let CardXIcon = $('.right')
let footer = $('footer')
let Els = [spanEl, sub, divEl, liEl]
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



//Spoonacular API
//For every request to Spoonacular, the first query parameter has to be the API key
//Example url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=da1414212d52482cbe9aaf669cae5da3'

//Use the following query parameters
//sort=random - makes the foods returned random
//instructionsRequired=true - recipes must have instructions
//addRecipeInformation=true - if set to true, you get more information about the recipe returned
//maxReadyTime=30 - the maximum time in minutes it should take to prepare and cook a recipe
//type= - 
//excludeIngredients - A comma-separated list of ingredients that the recipes must not contain

//id=12312 - number is an example, but gets specific information from

const testButton = document.querySelector("#test-button");
testButton.addEventListener("click", getSpoonApi);

function getSpoonApi() {
    let requestUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=da1414212d52482cbe9aaf669cae5da3&sort=random&number=3&instructionsRequired=true&addRecipeInformation=true&maxReadyTime=60&fillIngredients=true&type=maincourse"

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            console.log(data.results);
            dataResults = data.results;
            //return dataResults;

            for (let i = 0; i < data.results.length; i++) {

                //console log section
                let recipeSteps = data.results[i].analyzedInstructions[0].steps;

                console.log("This is dish #" + i);
                console.log("-----------------------");

                let cardTitle = data.results[i].title;
                console.log(cardTitle);

                let prepTime = data.results[i].readyInMinutes;
                console.log(prepTime + " minutes");

                let cardSummary = data.results[i].summary;
                console.log(cardSummary);

                console.log(data.results[i].servings + " servings");
                console.log(data.results[i].sourceUrl);

                let cardImage = data.results[i].image;
                console.log(cardImage);

                console.log(recipeSteps);

            //Card section

                //Changes card images
                let currentCardImg = document.getElementsByClassName("food-card-img");
                currentCardImg[i].src = cardImage;

                //Changes card title
                let currentCardTitle = document.getElementsByClassName("food-card-title");
                currentCardTitle[i].textContent = "";
                currentCardTitle[i].textContent = cardTitle;

                //Change prep time
                let currentPrepTime = document.getElementsByClassName("prep-time");
                currentPrepTime[i].textContent = prepTime + " minutes";

                //Change inside card summary
                let currentCardSummary = document.getElementsByClassName("recipe-summary");
                currentCardSummary[i].textContent = "";
                currentCardSummary[i].textContent = cardSummary;

                //This is to find the ingredients
                let ingredients = data.results[i].extendedIngredients;
                console.log("The ingredients for this dish are: ")

                for (let a = 0; a < ingredients.length; a++) {
                    console.log(ingredients[a].original);
                }

                console.log("The steps for this dish are: ")
                //This is to find the instructions
                for (let j = 0; j < recipeSteps.length; j++) {
                    console.log(recipeSteps[j].number);
                    console.log(recipeSteps[j].step);
                }

                console.log("");

            }
        })
    return

}

// let dataResults = await getSpoonApi();

// console.log(dataResults.length);
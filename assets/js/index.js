// js linked
let todayEl = moment();
$("#date").text(todayEl.format("dddd, MMM DD, YYYY"));

const nav = document.getElementById('nav')

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

//NEED TO FIND INGREDIENTS

function getSpoonApi() {
    let requestUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=da1414212d52482cbe9aaf669cae5da3&sort=random&number=3&instructionsRequired=true&addRecipeInformation=true&maxReadyTime=60"

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            console.log(data.results);
            for (let i = 0; i < data.results.length; i++) {
                let recipeSteps = data.results[i].analyzedInstructions[0].steps;

                console.log("This is dish #" + i);
                console.log("-----------------------");
                console.log(data.results[i].title);
                console.log(data.results[i].readyInMinutes);
                console.log(data.results[i].servings);
                console.log(data.results[i].sourceUrl);
                console.log(data.results[i].image);
                console.log(recipeSteps);

                //This is to find the instructions
                for (let j = 0; j < recipeSteps.length; j++) {
                    console.log(recipeSteps[j].number);
                    console.log(recipeSteps[j].step);
                }

                console.log("");

            }
        })

}

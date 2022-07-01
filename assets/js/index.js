// Get Today's Date 
let todayEl = moment();
$("#date").text(todayEl.format("dddd, MMM DD, YYYY"));
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
let CardXIcon = $('.right')
let footer = $('footer')
let Els = [spanEl, sub, divEl, liEl]
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
const nav = document.getElementById('nav');



//             //  Drink api fetch
//         function getDrink(baseIngredient) {
//             fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + baseIngredient)
//             .then(response => {
//                 return response.text()
//             })
//             .then((data) => {
//             console.log(data ? JSON.parse(data) : {})
//             })
//         }

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

// check if there is a users meal preference
function restoreMealsData() {
  let storedMeals = JSON.parse(localStorage.getItem('UserPreferredMeal'))
  console.log(storedMeals)
}
restoreMealsData()

// WHEN the DOM is fully loaded excute Materialize Elements
document.addEventListener('DOMContentLoaded', function () {

  // store the classes for each cuisine for looping
  let cuisines = ['.asian-cuisines', '.north-america', '.europe-cuisines', '.more-option']

  // loop through each cuisine's options to initialize  

  for (i = 0; i < cuisines.length; i++) {
    var el = document.querySelectorAll(cuisines[i]);
    let init = $(el).formSelect();
    let inst = M.FormSelect.getInstance(init);

    $('#foodSave').on('click', () => {
      let allSelected = inst.getSelectedValues();
      // console.log(allSelected[0])
      for (i = 0; i < allSelected.length; i++) {
        storedUserMeals.push(allSelected[i])
      }
      // console.log(storedUserMeals)
      setTimeout(() => {
        saveUserMealPref()
      }, 200);
    });
    }
  // console.log(storedUserMeals)
});

// seperate function to store the users referrences 
function saveUserMealPref() {
    // save to localstorage 
    localStorage.setItem('UserPreferredMeal', JSON.stringify(storedUserMeals))
}

// testing variable 
let isUserNew = true

// Function to check if the user is new 
function isTheUserNew() {
  if (isUserNew === true) {
    welcomeModal()
  }
}
// isTheUserNew()

// functions for the modals

// Starting welcome modal 
function welcomeModal() {
  let modal = document.querySelector('.modal-welcome');
  IsModalOpen = true 
  modal.classList.toggle('hidden')
  let modalBtn = $(modal).children().children('button')
  // when clicked, it will add cool effect and call the food function 
  $(modalBtn).on("click", function (e) {
    e.preventDefault()
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      foodModal()
    }, 750)
  })
}

foodModal()




// the Food modal function will get info from the user 
function foodModal() {

  // get food modal element 
  let modal = document.querySelector('.modal-food')
  IsModalOpen = true 

  // toggle the hidden class to hide it 
  modal.classList.toggle('hidden')

  // get the modal's button 
  let modalBtn = $(modal).children().children('button')

  // when clicked will call the drink function with slide effect 
  $(modalBtn).on("click", function (e) {
    // e.preventDefault()
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      IsModalOpen = false
      drinkModal()
    }, 750)
  })
}
// window.localStorage.clear()

// the drink function will store the user's favorite drinks 
function drinkModal() {
  let modal = document.querySelector('.modal-drink');
  IsModalOpen = true 
  modal.classList.toggle('hidden')

  let modalBtn = $(modal).children().children('button')
  $(modalBtn).on("click", function (e) {
    e.preventDefault()
    // adds cool animation and called the the blur function 
    $(modal).addClass('slide-out')
    setTimeout(() => {
      $(modal).addClass('hidden');
      IsModalOpen = false
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
    containerDiv.removeClass('blur')
    headerEl.removeClass('blur')
    document.body.style.overflow = 'auto'
  }
}

// Call on start 
blurBackgroundIf()
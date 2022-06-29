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
// Togglers 
let theme = 'dark';
let IsModalOpen = false

// Check if there is something in localstorage 
function restoreStorage() {
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
// functions for the modals 

function welcomeModal() {
  let modal = $('.modal-welcome');
  IsModalOpen = true 
  console.log(modal)
  foodModal()
  drinkModal()
}

function foodModal() {
  let modal = document.querySelector('.modal-food')
  IsModalOpen = true 
  modal.classList.toggle('hidden')
  console.log(modal)
}
foodModal()

function drinkModal() {
  let modal = $('.modal-drink');
  IsModalOpen = true 
  console.log(modal)
}

$(document).ready(function(){
  $('select').formSelect();
});

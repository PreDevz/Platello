// js linked
// Toggle theme button 
const toggleThemeBtn = $('#themeBtn')
// Get all DOM elements to change with theme 
let span = $('span')
let sub = $('#subTitle')
// let p = $('p')
let div = $('div')
let icons = $('.material-icons')
let headerEls = $(':header')
let box = $('.box')
let footer = $('footer')
let Els = [span, sub, div]
Els.push(headerEls)
Els.push(icons)
const body = $('body')
// the current theme 
let theme = 'dark';

// Check if there is something in localstorage 
function restoreStorage() {
  let themes = localStorage.getItem('theme');
  // if there is no theme, by default give the dark theme 
  if (themes === null) {
    body.css('background-color', 'var(--bg-drk-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-drk-clr)')
      eachBox.css('border', '1px solid var(--box-drk-brder-clr)')
    }
    footer.css('background-color', 'var(--bg-drk-clr)')
    footer.css('color', 'var(--lght-clr)')
  } else {
    // if there is a theme and if it's light, change all elements to light 
    if (themes === 'light') {
      body.css('background-color', 'var(--bg-lght-clr)')
      for (i = 0; i < Els.length; i++) {
        Els[i].css('color', 'var(--drk-clr)')
      }
      for (i = 0; i < box.length; i++) {
        let eachBox = $(box[i])
        eachBox.css('background-color', 'var(--box-lght-clr)')
        eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
      }
      footer.css('background-color', 'var(--bg-lght-clr)')
      footer.css('color', 'var(--bg-drk-clr)')
      theme = 'light'
    } else return
  }
}
restoreStorage()

// Once button is clicked, toggle theme function will change theme 
function toggleTheme(e) {
  e.preventDefault()
  // WHEN user clicks toggle theme button 
  // if the theme is dark switch to light 
  if (theme === 'dark') {
    body.css('background-color', 'var(--bg-lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--drk-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-lght-clr)')
      eachBox.css('border', '1px solid var(--box-lght-brder-clr)')
    }
    footer.css('background-color', 'var(--bg-lght-clr)')
    footer.css('color', 'var(--drk-clr)')
    theme = 'light'
    // set the current theme value in localstorage 
    localStorage.setItem('theme', theme)
  } else {
      // if the theme is light switch to dark
    body.css('background-color', 'var(--bg-drk-clr)')
    headerEls.css('color', 'var(--lght-clr)')
    for (i = 0; i < Els.length; i++) {
      Els[i].css('color', 'var(--lght-clr)')
    }
    for (i = 0; i < box.length; i++) {
      let eachBox = $(box[i])
      eachBox.css('background-color', 'var(--box-drk-clr)')
      eachBox.css('border', '1px solid var(--box-drk-brder-clr)')
    }
    footer.css('background-color', 'var(--bg-drk-clr)')
    footer.css('color', 'var(--lght-clr)')
    theme = 'dark'
    // set the current theme value in localstorage 
    localStorage.setItem('theme', theme)
  }
}

// Event Listeners 
toggleThemeBtn.on('click', toggleTheme)
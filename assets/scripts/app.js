'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./auth/events')


$(() => {
  //set up ui
  // $('#authenticated').hide()
  // $('#game').hide()

  // set event listeners
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#sign-out').on('click', gameEvents.onSignOut)


// select all boxes inside your flex container
// and make them listen to your game.event function

})

// 1 hide other divs / Pages
  //* Sign Up 
  //* Authenticated

//2 make the flex box container with 9 divs things. To google:
  // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  //  Papa div should know that there will be rows and columns of 3 * 3,
  //  not too sure how to set this

//3 "player choose a thing" funciton in events.js
  // if ID choosen is not in store."Choosen"
    //store it 
    //if store.choosen %2 == 1
      // mark the div as "x" class // Jquery.addclass https://www.w3schools.com/jquery/jquery_css_classes.asp
    //else
      // mark the div as "o" class
  //else
    //do nothing
  // 3.b Make the x and o class

//4 Make the nine divs listen to game.events
  // literally right above this same file

// 5 Fix sign up page
  // you should know how to do this by now

// 6 make everything pretty
  // have fun with this part

//7 MAKE THE COMPUTER TAKE A TURN
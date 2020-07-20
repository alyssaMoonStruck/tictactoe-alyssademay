'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const store = require('./store')
store.choosen = []

$(() => {
  //set up ui
  $('#authenticated').hide()
  $('#game').hide()
  $('#new-game').hide()
  $('#start-game').hide()
  

  //Grab every button, asign it to a click, and put that into the function we put into events,
  //then add the number of the box.
    $("#b0").click(gameEvents.playerChoose)
    $("#b1").click(gameEvents.playerChoose)
    $("#b2").click(gameEvents.playerChoose)
    $("#b3").click(gameEvents.playerChoose)
    $("#b4").click(gameEvents.playerChoose)
    $("#b5").click(gameEvents.playerChoose)
    $("#b6").click(gameEvents.playerChoose)
    $("#b7").click(gameEvents.playerChoose)
    $("#b8").click(gameEvents.playerChoose)
    

    $('#new-game').click(gameEvents.newGame)
    $('#start-game').click(gameEvents.newGame)

  // set event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  

// select all boxes inside your flex container
// and make them listen to your game.event function

})

//3
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
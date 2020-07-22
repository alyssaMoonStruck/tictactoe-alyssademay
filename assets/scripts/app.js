'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const store = require('./store')


$(() => {
  //set up ui
    store.gameId = ''
    store.choosen = []


  $('#authenticated').hide()
  $('#game').hide()
  $('#new-game').hide()
  $('#start-game').hide()
  

  //Grab every button, asign it to a click, and put that into the function we put into events,
  //then add the number of the box.
  $('#game').children().on('click',gameEvents.playerChoose)
    

    $('#new-game').click(gameEvents.newGame)
    $('#start-game').click(gameEvents.newGame)

  // set event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)



})

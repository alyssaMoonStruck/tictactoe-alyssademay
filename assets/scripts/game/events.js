'use strict'

const ui = require('./ui')
const store = require('../store');
const api = require('./api');


store.choosen = [];
store.gameId =''
const playerChoose = function(event) {
    let id  = event.target.id;
    store.choosen.push(id)
    let result = false 
    let player = ''

    if (store.choosen.length % 2 === 1) {
            $('#' + id).text("X").addClass("X").unbind('click')
            player = "X"
    } else {
        $('#' + id).text("O").addClass("O").unbind('click')
        player = "O"
    } 
    result = checkIfGameWon(player)
    let payload = {
        game: {
            cell: {
                index: id.charAt(1),
                value: player
            },
            over: result
        }
    }
    api.updateGame(payload, store.gameId)
        .then()
        .catch()
}

const checkIfGameWon = function(selected) {
    if(didYouWin() === true) {
        ui.showWinMessage(selected)
        return true
    } else if (isDraw() === true) {
        ui.showDrawMessage()
        return true
    } else {
        ui.keepTrack(selected)
        return false
    } 
}
const newGame = function() {
    api.getGames()
        .then(ui.updateGamesPlayedSuccess)
        .catch(ui.updateGamesPlayedFailed)
    api.startNewGame()
        .then(ui.startNewGame)
        .catch(ui.startNewGameFailed)
}

const didYouWin = function() {
    if(
        ($('#b0').text() !== '') &&
        ($('#b1').text()) && 
        ($('#b1').text() === $('#b2').text()))
    {
        return true 
    } else if(
        ($('#b3').text()  !== '') &&
        ($('#b3').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b5').text()))
    {
        return true
    } else if(
        ($('#b6').text()  !== '') &&
        ($('#b6').text() === $('#b7').text()) && 
        ($('#b7').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b0').text()  !== '') &&
        ($('#b0').text() === $('#b3').text()) && 
        ($('#b3').text() === $('#b6').text()))
    {
        return true
    } else if(
        ($('#b0').text()  !== '') &&
        ($('#b0').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b1').text()  !== '') &&
        ($('#b1').text() === $('#b6').text()) && 
        ($('#b6').text() === $('#b7').text()))
    {
        return true
    } else if(
        ($('#b2').text()  !== '') &&
        ($('#b2').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b2').text()  !== '') &&
        ($('#b2').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b6').text()))
    {
        return true
    } else {
        return false 
    }
}

const isDraw = function() {
    if(store.choosen.length === 9){
        return true;
    } else {
        return false
    } 
}




module.exports = {
    playerChoose,
    didYouWin,
    newGame,
    
}




//stretch goal
    // roll a random 1-9 as the computer choice
    // while it is in the store
        // keep rolling
    
    //
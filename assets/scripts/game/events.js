'use strict'

const ui = require('./ui')
const store = require('../store');
const api = require('./api');


const playerChoose = function(event) {
    let id  = event.target.id;
    store.choosen.push(id)

    let result; 
    let player;

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
                index: id.charAt(1),  //Used chaAt to grab the number within the box id string
                value: player
            },
            over: result
        }
    }
    api.updateGame(payload)
        .then()
        .catch()
}

//Return false if game is still going 
//returns true if game has ended with win or draw
const checkIfGameWon = function(selected) {
    if(didYouWin() === true) {
        //Showing whether X or O won by selected
        ui.showWinMessage(selected)
        return true
    } else if (isDraw() === true) {
        //showing message if draw
        ui.showDrawMessage()
        return true
    } else {
        //keeping track of who's turn it is
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
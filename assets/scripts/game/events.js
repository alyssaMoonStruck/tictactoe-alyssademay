'use strict'
const ui = require('./ui')
const store = require('../store');
const api = require('./api');
let gameOver = false;

const playerChoose = function(event) {
    let id  = event.target.id;
    let player;

    //Prevents 
    if(didYouWin() === true || (isDraw() === true && gameOver)) {
        ui.tryDifferentSquareDW();
        return
    }

    //Did another player already choose that square?
    if (event.target.innerText !== '') {
        ui.tryDifferentSquare()
        return
    }

    store.choosen.push(id)
    
    //Whos turn is it?
    if (store.choosen.length % 2 === 1) {
        $('#' + id).text("X").addClass("X")
        player = "X"
    } else {
        $('#' + id).text("O").addClass("O")
        player = "O"
    }

    //Check the board
    gameOver =  checkIfGameWon(player)
    let payload = {
        game: {
            cell: {
                index: id.charAt(1),  //Used chaAt to grab the number within the box id string
                value: player
            },
            over: gameOver
        }
    }
    api.updateGame(payload)
        .then()
        .catch()
}

const checkIfGameWon = function(selected) {
    if(didYouWin() === true) 
    {
        ui.showWinMessage(selected)
        return true
    } 
    else if (isDraw() === true)
    {
        return true
    } 
    else {
        ui.keepTrack(selected)
        return false
    } 
}
const newGame = function() {
    store.choosen = []
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
        ($('#b1').text()) === $('#b0').text() && 
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
        ($('#b4').text()  !== '') &&
        ($('#b0').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b1').text()  !== '') &&
        ($('#b1').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b7').text()))
    {
        return true
    } else if(
        ($('#b2').text()  !== '') &&
        ($('#b2').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b6').text()  !== '') &&
        ($('#b2').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b6').text()))
    {
        return true
    } else {
        return false 
    }
}

const isDraw = function() {
    if(store.choosen.length === 9)
    {
        ui.showDrawMessage()
        return true;
    }
    else 
    {
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
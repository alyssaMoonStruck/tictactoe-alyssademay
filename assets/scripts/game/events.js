'use strict'
const ui = require('./ui')
const store = require('../store')
store.choosen = [];

const playerChoose = function(event) {
    let id  = event.target.id;
    store.choosen.push(id)

    if (store.choosen.length % 2 === 1) {
            $('#' + id).text("X").addClass("x").unbind('click')
            checkIfGameWon("X")
    } else {
        $('#' + id).text("O").addClass("O").unbind('click')
        checkIfGameWon("O")
    } 
}

    const checkIfGameWon = function(selected) {
        if(didYouWin() === true) {
            ui.showWinMessage(selected)
        } else if (isDraw() === true) {
            ui.showDrawMessage()
        } else {
            ui.keepTrack(selected)
        } 

    }

    // const newGame = function() {
    //     if(didYouWin() === true) {
    //     } else if (isDraw() === true) {
    //         $('#game').on('click').empty()
    //     }
    // }

const didYouWin = function() {
    if(
        ($('#b1').text() === $('#b2').text()) && 
        ($('#b2').text() === $('#b3').text()))
    {
        return true 
    } else if(
        ($('#b4').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b6').text()))
    {
        return true
    } else if(
        ($('#b7').text() === $('#b8').text()) && 
        ($('#b8').text() === $('#b9').text()))
    {
        return true
    } else if(
        ($('#b1').text() === $('#b4').text()) && 
        ($('#b4').text() === $('#b7').text()))
    {
        return true
    } else if(
        ($('#b1').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b9').text()))
    {
        return true
    } else if(
        ($('#b2').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b8').text()))
    {
        return true
    } else if(
        ($('#b3').text() === $('#b6').text()) && 
        ($('#b6').text() === $('#b9').text()))
    {
        return true
    } else if(
        ($('#b3').text() === $('#b5').text()) && 
        ($('#b5').text() === $('#b7').text()))
    {
        return true
    } else {
        return false 
    }
}

const isDraw = function() {
    if(store.choosen.length == 9){
        return true;
    } else {
        return false
    } 
}




module.exports = {
    playerChoose,
    didYouWin,
    //Another
}




//stretch goal
    // roll a random 1-9 as the computer choice
    // while it is in the store
        // keep rolling
    
    //
'use strict'
const store = require ('../store')


const showWinMessage = function (selected) {
    $('#game').children().css("background-color", "purple")
    $('#message').text(selected + " Wins!")
    $('#new-game').show()

}

const showDrawMessage = function() {
    $('#game').children().css("background-color", "purple")
    $('#message').text("It's A Draw!")
    $('#new-game').show()
}

const keepTrack = function(selected) {
if (selected === "X") {
    $('#message').text('Your Turn O!')
} else {
    $('#message').text("Your Move X")
}

} 

const startNewGame = function(response) {
    store.gameId = response.game._id
    $('#message').text('New Game Started!')
    $('#game').children().css("background-color", "white")
    $('#game').children().removeClass("X").text('')
    $('#game').children().removeClass("O").text('')
    $('#new-game').hide()
    $('#start-game').hide()
    $('#game').children().show()
}

const startNewGameFailed = function() {
    $('#message').text('New Game Failed To Start.')

}

const updateGamesPlayedSuccess = function(response) {
    let gamesPlayed = response.games.length
    $('#score').text( gamesPlayed + ' Games Played!')

}

const updateGamesPlayedFailed = function(error) {
        $('#score').text('Error Loading Games')
}




module.exports = {
    showWinMessage,
    showDrawMessage,
    keepTrack,
    startNewGame,
    startNewGameFailed,
    updateGamesPlayedSuccess,
    updateGamesPlayedFailed
    
}
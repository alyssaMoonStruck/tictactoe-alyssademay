'use strict'

const showWinMessage = function (selected) {
    $('#game').children().css("background-color", "red")
    $('#game').unbind('click')
    $('#message').text(selected + " Wins!")
    $('#new-game').show()

}

const showDrawMessage = function() {
    $('#message').text("It's A Draw!")
}

const keepTrack = function(selected) {
if (selected == "x") {
    $('#message').text('Your Trun O!')
} else {
    $('#message').text("Your Move X")
}

} 

module.exports = {
    showWinMessage,
    showDrawMessage,
    keepTrack
}
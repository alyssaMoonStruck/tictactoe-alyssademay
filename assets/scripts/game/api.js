const config = require('../config')
const store =  require('../store')

const startNewGame = function() {
    return $.ajax({
        headers: {
        Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/games',
        method: 'POST',
        data: {}
    })
}

const updateGame = function(move) {
    return $.ajax({
        headers: {
        Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/games/' + store.gameId,
        method: 'PATCH',
        data: move
    })
}

const getGames = function() {
    return $.ajax({
        headers: {
        Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/games',
        method: 'GET',
        data: {}
    })
}

module.exports ={
    startNewGame,
    updateGame,
    getGames
}
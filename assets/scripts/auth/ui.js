'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
    $('#message1').text('Successfully signed up!')
    store.user = data.user
}

const signUpFailure = function (error) {
    $('#message1').text('Failed to sign up')
}

const signInSuccess = function (data) {
    // store = data.user
    store.user = data.user
    $('#message').text('Successfully signed in!')
    store
    store.user.token
    $('#authenticated').show()
    $('#game').show()
    $('#unauthenticated').hide()
    $('#start-game').show()
    $('#game').children().hide()
    $('#game').children().hide()

}

const signInFailure = function (error) {
    $('#message1').text('Failed to sign in')
}

const changePasswordSuccess = function (data) {
    $('form').trigger('reset')
    $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
    $('form').trigger('reset')
    $('#message').text('Failed to change password')
}

const signOutSuccess = function (data) {
    $('form').trigger('reset')
    $('#message1').text('Successfully signed out!')
    $('#unauthenticated').show()
    $('#authenticated').hide()
    $('#game').hide()
    $('#new-game').hide()
    $('#start-game').hide()
}

const signOutFailure = function (error) {
    $('#message1').text('Failed to sign out')
    store
    store.user.token
    $('#authenticated').show()
    $('#game').hide()
    $('#unauthenticated').hide()
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInFailure,
    signInSuccess,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}
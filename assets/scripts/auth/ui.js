'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
    $('#message').text('Successfully signed up!')
    store.user = data.user
}

const signUpFailure = function (error) {
    $('#message').text('Failed to sign up')
}

const signInSuccess = function (data) {
    // store = data.user
    store.user = data.user
    $('#message').text('Successfully signed in!')
    console.log('store: ', store)
    console.log('token: ', store.user.token)
    $('#authenticated').show()
    $('#game').show()
    $('#unauthenticated').hide()

}

const signInFailure = function (error) {
    $('#message').text('Failed to sign in')
}

const changePasswordSuccess = function (data) {
    $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
    $('#message').text('Failed to change password')
}

const signOutSuccess = function (data) {
    $('form').trigger('reset')
    $('#message').text('Successfully signed out!')
}

const signOutFailure = function (error) {
    $('#message').text('Failed to sign out')
    console.log('store: ', store)
    console.log('token: ', store.user.token)
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
'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
    $('#message').text('Successfully signed up!')
}

const signUpFailure = function (data) {
    $('#message').text('Failed to sign up')
}

const signInSuccess = function (data) {
    $('#message').text('Successfully signed in!')
}

const signInFailure = function (data) {
    $('#message').text('Failed to sign in')
}

const changePasswordSuccess = function (data) {
    $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (data) {
    $('#message').text('Failed to change password')
}

const signOutSuccess = function (data) {
    $('#message').text('Successfully signed out!')
}

const signOutFailure = function (data) {
    $('#message').text('Failed to sign out')
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
'use strict'

const config  = require('../config')
const store = require('../store')


const signUp = function (formInfo) {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: formInfo
    })
}  

const signIn = function (formInfo) {



    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: formInfo
    })
}

const changePassword = function (formInfo) {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        data: formInfo
    })
}

const signOut = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/sign-out',
        method: 'DELETE'
    })
}


module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword

}
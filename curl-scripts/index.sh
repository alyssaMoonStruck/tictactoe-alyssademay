curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
--include \
--request GET \
--header "Content-Type: application/json" \
{ 
    "games":[
    {
    "cells":["","","","","","","","",""],
    "over":false,
    "_id":"5e823ba98929cc4e95e2f5d9",
    "owner":"5e82311c8929cc4e95e2f5d8",
    "createdAt":"2020-03-30T17:30:10.371Z",
    "updatedAt":"2020-03-30T16:34:27.782Z",
    "__v":0
    },
    {
    "cells":["x","","","o","","","","",""],
    "over":false,
    "_id":"5ed7e519659863c00ff4907e",
    "owner":"5e82311c8929cc4e95e2f5d8",
    "createdAt":"2020-03-30T16:34:17.792Z",
    "updatedAt":"2020-03-30T18:37:30.232Z",
    "__v":0
    },
    {
    "cells":["","o","","","x","o","","x",""],
    "over":false,
    "_id":"5ed7e526cf104aa275b3ef17",
    "owner":"5e82311c8929cc4e95e2f5d8",
    "createdAt":"2020-03-30T15:24:21.743Z",
    "updatedAt":"2020-03-30T18:39:43.382Z",
    "__v":0
    }
]
}
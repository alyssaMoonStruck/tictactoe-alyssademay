curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games/:over?" \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-type: application/json" \
data {{
"game":{
    "cells":["","","","","","","","",""],
    "over":false,
    "_id":"5e823ba98929cc4e95e2f5d9",
    "owner":"5e82311c8929cc4e95e2f5d8",
    "createdAt":"2020-03-30T18:34:17.772Z",
    "updatedAt":"2020-03-30T18:34:17.772Z",
    "__v":0
}
}
}
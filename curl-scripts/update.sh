curl "https://tic-tac-toe-api-development.herokuapp.com/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
{
"game": {
    "cell": {
    "index": 0,
    "value": "x"
    },
    "over": false
}
}
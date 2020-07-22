curl "https://library-express-api.herokuapp.com/movies/${ID}" \
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
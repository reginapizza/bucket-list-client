curl "https://https://tranquil-journey-54950.herokuapp.com/change-password" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "passwords":{
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo

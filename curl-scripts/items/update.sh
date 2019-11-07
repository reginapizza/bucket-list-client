curl "https://tranquil-journey-54950.herokuapp.com/items/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "item": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "location": "'"${LOCATION}"'",
      "cost": "'"${COST}"'",
      "importance": "'"${IMPORTANCE}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

  echo

curl "https://tranquil-journey-54950.herokuapp.com/items${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo

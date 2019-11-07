'use strict'

const authEvents = require('./auth/events.js')
const itemEvents = require('./items/events.js')

const itemsExamples = [
  {title: 'See the Northern Lights', link: 'https://www.nationalgeographic.com/travel/top-10/7-aurora-destinations/'},
  {title: 'Bathe an Elephant', link: 'https://www.tripadvisor.com/Attraction_Review-g293917-d601884-Reviews-Elephant_Nature_Park-Chiang_Mai.html'},
  {title: 'See to the Roman Colosseum', link: 'https://www.rometoolkit.com/whattodo/colosseum.htm'},
  {title: 'Hike the Inca Trail', link: 'http://www.incatrailperu.com/'},
  {title: 'Do the Skywalk at the Grand Canyon', link: 'https://grandcanyonwest.com/explore/west-rim/skywalk-eagle-point/'},
  {title: 'Donate Blood', link: 'https://www.redcrossblood.org/donate-blood/how-to-donate/eligibility-requirements.html'},
  {title: 'Grow out my hair and then donate it', link: 'https://www.cancer.net/blog/2018-04/how-donate-your-hair-3-simple-steps'}
]

const randomItem = itemsExamples[Math.floor(Math.random() * itemsExamples.length)]

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('click', authEvents.onSignOut)
  // this creates an item
  $('.create-item').on('submit', itemEvents.onCreateItem)
  // this will get all of the user's item items
  $('.get-my-items').on('click', itemEvents.onGetMyItems)
  // this will get ALL items from ALL users
  $('.get-all-items').on('click', itemEvents.onGetAllItems)
  // this will show a specific item for the current user
  $('.show-item').on('click', itemEvents.onShowItem)
  // // this will mark an item as completed
  // $('#completedItem').on('click', itemEvents.onCompletedItem)
  // this will update an item (only can be done by owner)
  $('.update-item').on('submit', itemEvents.onUpdateItem)
  // this will delete the item (only can be done by owner)
  $('#delete-item-confirm').on('click', itemEvents.onDeleteItem)
})

module.exports = {
  randomItem
}

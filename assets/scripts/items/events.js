'use strict'
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateItem = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createItem(formData)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onCreateItemFailure)
}

// // what the hell is going on here
// const onCompletedItem = function (event) {
//   event.preventDefault()
//   let completed === true
//   api.updateItem(completed, id)
//     .then(ui.onCompletedItemSuccess)
//     .catch(ui.onCompletedItemFailure)
// }

const onUpdateItem = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.item.id
  api.updateItem(formData, id)
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onUpdateItemFailure)
}

const onShowItem = function (event) {
  event.preventDefault()
  api.showItems()
    .then(ui.onShowItemSuccess)
    .catch(ui.onShowItemFailure)
}

const onGetMyItems = function () {
  // event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  api.getMyItems()
    .then(ui.onGetMyItemsSuccess)
    .catch(ui.onGetMyItemsFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteItem(formData)
    .then(ui.onDeleteItemSuccess)
    .catch(ui.onDeleteItemFailure)
}

module.exports = {
  onCreateItem,
  onUpdateItem,
  onShowItem,
  // onCompletedItem,
  onDeleteItem,
  onGetMyItems
}

'use strict'

const config = require('../config')
const store = require('../store')

const createItem = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// const getAllItems = function () {
//   return $.ajax({
//     url: config.apiUrl + '/items',
//     method: 'GET',
//     data: {
//
//     }
//   })
// }

const getMyItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    }
  })
}

const showItem = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/items/' + formData.item.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateItem = function (formData) {
  console.log('update item form data is', formData)
  return $.ajax({
    url: config.apiUrl + '/items/' + formData.item.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteItem = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/items/' + formData.item.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: formData
  })
}

module.exports = {
  createItem,
  // getAllItems,
  getMyItems,
  showItem,
  updateItem,
  deleteItem
}

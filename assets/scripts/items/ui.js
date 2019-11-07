'use strict'
const getMyItemsHandlebars = require('../templates/getMyItems.handlebars')

const onCreateItemSuccess = function (data) {
  $('#message-center').text('Successfully created an Item.').fadeIn(0, 1)
  $('#message-center').text('Successfully created an Item.').fadeOut(5000, 0)
  $('#createItem').modal('hide')
  $('#create-form').trigger('reset')
  // $('form').trigger('reset')
}

const onCreateItemFailure = function (data) {
  $('#message-center').text('Failed to create an Item. Please try again.').fadeIn(0, 1)
  $('#message-center').text('Failed to create an Item. Please try again.').fadeOut(5000, 0)
  $('#createItem').modal('hide')
  $('#create-form').trigger('reset')
  // $('form').trigger('reset')
}

const onGetMyItemsSuccess = function (data) {
  console.log(data)
  $('.list-view').css('display', 'block').append(getMyItemsHandlebars({items: data.items}))
  $('#item-modal').on('show.bs.modal', event => {
    const button = $(event.relatedTarget)
    const item = button.data('item')
    const modal = $('#item-modal')
    modal.find('.item-id').text(item._id)
    modal.find('.item-title').text(item.title)
    modal.find('.item-location').text(item.location)
    modal.find('.item-description').text(item.description)
    modal.find('.item-cost').text(item.cost)
    modal.find('.item-importance-scale').text(item.importanceScale)
    modal.find('.item-difficulty-scale').text(item.difficultyScale)
    modal.find('.item-completed').text(item.completed)
  })
  $('#message-center').text('Successfully got your Items').fadeIn(0, 1)
  $('#message-center').text('Successfully got your Items').fadeOut(5000, 0)
}

const onGetMyItemsFailure = function (data) {
  $('#message-center').text('Failed to get all Items. Please try again.').fadeIn(0, 1)
  $('#message-center').text('Failed to get all Items. Please try again.').fadeOut(5000, 0)
}

// const onGetAllItemsSuccess = function (data) {
//   $('.bucket-list').empty()
//   $('.bucket-list').css('display', 'block').append(getItemsHandlebars({items: data.items}))
//   $('#message-center').text('Successfully got all Items').fadeIn(0, 1)
//   $('#message-center').text('Successfully got all Items').fadeOut(5000, 0)
// }
//
// const onGetAllItemsFailure = function (data) {
//   $('#message-center').text('Failed to get all Items. Please try again.').fadeIn(0, 1)
//   $('#message-center').text('Failed to get all Items. Please try again.').fadeOut(5000, 0)
// }

const onShowItemSuccess = function (data) {
  $('#showItem').modal('hide')
  $('.bucket-list').empty()
  $('#message-center').text('Successfully got an Item').fadeIn(0, 1)
  $('#message-center').text('Successfully got an Item').fadeOut(5000, 0)
  // $('.bucket-list').css('display', 'block').append(showItemHandlebars({item: data.item}))
}

const onShowItemFailure = function (data) {
  $('#showItem').modal('hide')
  $('#message-center').text('ID could not be found, please try again.').fadeIn(0, 1)
  $('#message-center').text('ID could not be found, please try again.').fadeOut(5000, 0)
}

const onUpdateItemSuccess = function (data) {
  $('.bucket-list').empty()
  $('#message-center').text('Successfully updated Item').fadeIn(0, 1)
  $('#message-center').text('Successfully updated Item').fadeOut(5000, 0)
  $('#updateItem').modal('hide')
  $('#update-form').trigger('reset')
  // $('.bucket-list').css('display', 'block').append(showItemHandlebars({item: data.item}))
}

const onUpdateItemFailure = function (data) {
  $('#updateItem').modal('hide')
  $('#message-center').text('You do not have permission to do that.').fadeIn(0, 1)
  $('#message-center').text('You do not have permission to do that.').fadeOut(5000, 0)
  $('#update-form').trigger('reset')
}

const onDeleteItemSuccess = function () {
  $('.bucket-list').empty()
  $('#message-center').text('Successfully deleted an Item').fadeIn(0, 1)
  $('#message-center').text('Successfully deleted an Item').fadeOut(5000, 0)
  console.log('deleted item')
}

const onDeleteItemFailure = function () {
  $('#message-center').text('You do not have permission to do that.').fadeIn(0, 1)
  $('#message-center').text('You do not have permission to do that.').fadeOut(5000, 0)
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onGetMyItemsSuccess,
  onGetMyItemsFailure,
  // onGetAllItemsSuccess,
  // onGetAllItemsFailure,
  onShowItemSuccess,
  onShowItemFailure,
  onUpdateItemSuccess,
  onUpdateItemFailure,
  onDeleteItemSuccess,
  onDeleteItemFailure
}

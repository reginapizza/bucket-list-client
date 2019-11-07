'use strict'

const store = require('../store')
// const getMyItemsHandlebars = require('../templates/getMyItems.handlebars')

const onSignUpFailure = function () {
  $('#message-center').text('Sign Up Failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign Up Failed. Please Try Again.').fadeOut(5000, 0)
  $('#signUpForm').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  $('#message-center').text('Signed In Successfully!').fadeIn(0, 1)
  $('#message-center').text('Signed In Successfully!').fadeOut(5000, 0)
  store.user = responseData.user
  $('#signIn, #signUp').modal('hide')
  $('.sign-up, .sign-in, .landing-page').hide()
  $('.sign-out, .change-password, .get-my-items, .get-all-items, .show-item, .update-item, .delete-item, .create-item').css('display', 'block')
  $('#signInForm, #signUpForm').trigger('reset')
}

const onSignInFailure = function () {
  $('#signIn').modal('hide')
  $('#message-center').text('Sign in failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign in failed. Please Try Again.').fadeOut(5000, 0)
  $('#signInForm').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message-center').text('Password changed successfully!').fadeIn(0, 1)
  $('#message-center').text('Password changed successfully!').fadeOut(5000, 0)
  $('#changePassword').modal('hide')
  $('#changePasswordForm').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message-center').text('Password change failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Password change failed. Please Try Again.').fadeOut(5000, 0)
  $('.change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message-center').text('Signed out successfully!').fadeIn(0, 1)
  $('#message-center').text('Signed out successfully!').fadeOut(5000, 0)
  $('.list-view').css('display', 'none')
  $('.sign-out, .change-password, .get-my-items, .get-all-items, .show-item, .update-item, .delete-item, .create-item, .list-view').hide() // are these all classes??
  $('#signUpForm, #signInForm, #changePasswordForm, #item-info, #deleteitemForm, #updateitemForm, #showitemForm').trigger('reset')
  $('#signIn, #signUp').modal('hide')
  $('.sign-up, .sign-in, .landing-page').show()
}

const onSignOutFailure = function () {
  $('#message-center').text('Sign out failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign out failed. Please Try Again.').fadeOut(5000, 0)
  $('.sign-out').trigger('reset')
}

module.exports = {
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

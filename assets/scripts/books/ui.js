const store = require('../store')
// const logic = require('./gamelogic')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in')
  $('#message').text('Successfully signed in')
  store.user = data.user
  $('#change-password').show()
  $('.container').show()
  $('#sign-up').trigger('reset')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password')
  $('#message').text('Successfully changed password')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on change password')
  store.user = null
}

const signOutSuccess = function () {
  console.log('Successfully signed out')
  $('#message').text('Successfully signed out')
  $('#sign-in').trigger('reset')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign out')
}

const createGameSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully created game')
  store.game = data.game
  console.log(data.game)
}

const createGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on creating a game')
}

const updateGameSuccess = function (data) {
  $('#message').text('Successfully updated game')
  store.game = data.game
  console.log(store.game)
}

const updateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on updating a game')
}

const onSuccess = function (data) {
  if (data.games) {
    $('#message2').text('You have played ' + data.games.length + ' games!')
    console.log(data.games)
  } else {
    console.table(data.games)
  }
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  onSuccess,
  onError
}

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const logic = require('./gamelogic')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('.box').on('click', logic.displayLetter)
  $('.box').on('click', logic.whoWon)
  $('.reset').on('click', logic.newGame)
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}

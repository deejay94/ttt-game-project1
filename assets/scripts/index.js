'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const logic = require('./books/gamelogic')
const authEvents = require('./books/events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  $('.col').on('click', logic.displayLetter)
})

$(() => {
  authEvents.addHandlers()
})

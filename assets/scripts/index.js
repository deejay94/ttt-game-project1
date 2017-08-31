'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const tttArrray = [[null, null, null], [null, null, null], [null, null, null]]
let clickCounter = 0

// const displayX = function () {
//   // event.preventDefault()
//   $(this).text('X')
//   clickCounter += 1
//   console.log(this)
// }

// const displayO = function () {
//   // event.preventDefault()
//   $(this).text('O')
//   clickCounter += 1
//   console.log(this)
// }

const displayLetter = function () {
  if (clickCounter % 2 === 0) {
    clickCounter += 1
    $(this).text('X') //displayO()
  } else {
    clickCounter += 1
    $(this).text('O') //displayX()
  }
  console.log(this)
}

$(() => {
  $("button[class^='col-xs-4']").on('click', displayLetter)
})





  //

  // $(() => {
  //   $('button').on('click', function () {
  //     // event.preventDefault()
  //     console.log('button works')
  //     // $(this).text('O')
  //   })
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

module.exports = {
}

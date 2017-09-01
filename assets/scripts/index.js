'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const tttArray = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

let clickCounter = 0

const displayX = function () {
  clickCounter += 1
  $(this).text('X')
  const i = $(this).data('i')
  const j = $(this).data('j')
  tttArray[i][j] = 'X'
  console.log(tttArray)
  console.log(clickCounter)
}
const displayO = function () {
  clickCounter += 1
  $(this).text('O')
  const i = $(this).data('i')
  const j = $(this).data('j')
  tttArray[i][j] = 'O'
  console.log(clickCounter)
}

// $('.col').on('click', function () {
//   clickCounter += 1
//   $(this).text('X')
//   const i = $(this).data('i')
//   const j = $(this).data('j')
//   tttArray[i][j] = 'X'
//   console.log(tttArray)
//   console.log(clickCounter)
// })
const displayLetter = function () {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tttArray[i][j] === ' ' && clickCounter % 2 === 0) {
        displayX()
      } else if (tttArray[i][j] === ' ' && clickCounter % 2 === 1) {
        displayO()
      } else {
        $('#message').text('Please choose another square')
      }
    }
  }
}

$('.col').on('click', displayLetter)

// const displayX = function () {
//   clickCounter += 1
//   $(this).text('X')
//   i // = $(this).data('i')
//   j // = $(this).data('j')
//   tttArray[i][j] = 'X'
//   console.log(tttArray)
//   console.log(clickCounter)
// }
// const displayO = function () {
//   clickCounter += 1
//   $(this).text('O')
//   i // = $(this).data('i')
//   j // = $(this).data('j')
//   tttArray[i][j] = 'O'
//   console.log(clickCounter)
// }

// const displayLetter = function () {
//   clickCounter += 1
//   if (tttArray[i][j] === ' ' && clickCounter % 2 === 0) {
//     displayX()
//   } else if (tttArray[i][j] === ' ' && clickCounter % 2 === 0) {
//     displayO()
//   } else {
//     $('#message').text('Please choose another square')
//   }
// }

// $('.col').on('click', displayX)
// $('.col').on('click', function () {
//   clickCounter += 1
//   $(this).text('X')
//   const i = $(this).data('i')
//   const j = $(this).data('j')
//   tttArray[i][j] = 'X'
//   console.log(clickCounter)
// })
//
// $('.col').on('click', function () {
//   clickCounter += 1
//   $(this).text('O')
//   const i = $(this).data('i')
//   const j = $(this).data('j')
//   tttArray[i][j] = 'O'
//   console.log(clickCounter)
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

module.exports = {
}

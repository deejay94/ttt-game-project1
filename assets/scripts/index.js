'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const tttArrray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let i = 0

const checkWhoWins = function () {
  if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    console.log('Winner')
  } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
    console.log('Winner')
  }
}

$(() => {
  $('.box').on('click', function () {
    // event.preventDefault()
    $(this).text(tttArrray[i])
    i++
    $(this).attr('disabled', 'disabled')
    checkWhoWins()
  })
})
// let clickCounter = 0
// let letter



// const displayX = function () {
//   // event.preventDefault()
//   $(this).text('X')
//   clickCounter += 1
//   console.log(this)
// }

// const displayLetter = function () {
//   if (clickCounter % 2 === 0) {
//     clickCounter += 1
//     $(this).text('X')
//   } else {
//     clickCounter += 1
//     $(this).text('O')
//   }
//   console.log($(this))
// }
//
// const noRepeat = function () {
//   letter = $(this).text()
//
//   if (letter === 'X') {
//     //console.log(letter)
//   return 'X'
// }
// else if (letter === 'O'){
//   return 'O'
// }
// else {
//   displayLetter()
// }
// console.log($(this).text())
// }
//
// $(() => {
//   $("button[class^='col-xs-4']").on('click', noRepeat)
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

module.exports = {
  // displayLetter
}

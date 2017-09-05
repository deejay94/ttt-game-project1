const api = require('./api')
const store = require('../store')

const tttArrray = ['', '', '', '', '', '', '', '', '']

$(function () {
  $('.sign-up').text('')
  $('.sign-in').text('')
  $('.box').hide()
  $('#change-password').hide()
  $('#sign-in').on('submit', function () {
    $('.box').show()
  })
})

const player = function () {
  if (store.clickCounter % 2 === 1) {
    return 'X'
  } else {
    return 'O'
  }
}

const displayX = function (target) {
  console.log('2 here')
  $(target).text('X')
  store.clickCounter += 1
  const index = $(target).attr('id') // 0, 1, - 8
  const gameOver = whoWon()
  api.updateGame(index, 'X', gameOver) // index = box id, value = 'x', isOver =
  // call whoWon
  // change api.isOver to store property
  // start isover as false
  // make it so that whowon updates the store
  console.log(store.clickCounter)
}

const displayO = function (target) {
  console.log('firing O')
  $(target).text('O')
  store.clickCounter += 1
  console.log(store.clickCounter)
}

const displayLetter = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
    if (store.clickCounter % 2 === 0) {
      displayX(event.target)
    } else {
      displayO(event.target)
    }
  }
}

// const resetGame = function () {
//   $('.box').text('')
//   $('#message').text('')
//   store.clickCounter = 0
//   $('.box').on('click', displayLetter)
//   $('.box').on('click', whoWon)
// }

const whoWon = function () {
  if (store.clickCounter <= 9) {
    if (($('#box0').text() === $('#box1').text() && $('#box1').text() === $('#box2').text()) && ($('#box0').text() === 'X' || $('#box0').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box0').text() === $('#box4').text() && $('#box4').text() === $('#box8').text()) && ($('#box0').text() === 'X' || $('#box0').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box0').text() === $('#box3').text() && $('#box3').text() === $('#box6').text()) && ($('#box0').text() === 'X' || $('#box0').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box3').text() === $('#box4').text() && $('#box4').text() === $('#box5').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box2').text() === $('#box4').text() && $('#box4').text() === $('#box6').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (($('#box6').text() === $('#box7').text() && $('#box7').text() === $('#box8').text()) && ($('#box6').text() === 'X' || $('#box6').text() === 'O')) {
      $('#message').text(player() + ' is the Winner!!')
      $('.box').off()
      // api.isOver = true
    } else if (store.clickCounter === 9) {
      $('#message').text('Issa Draw')
      $('.box').off()
      // api.isOver = true
    } else {
      // api.isOver = false
    }
    return api.isOver
  }
}

module.exports = {
  displayLetter,
  whoWon
  // resetGame
}

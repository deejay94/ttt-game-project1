
const tttArrray = ['', '', '', '', '', '', '', '', '']
let clickCounter = 0

const player = function () {
  if (clickCounter % 2 === 1) {
    return 'X'
  } else {
    return 'O'
  }
}

const displayX = function (target) {
  console.log('2 here')
  console.log()
  $(target).text('X')
  clickCounter += 1
}

const displayO = function (target) {
  console.log('firing O')
  $(target).text('O')
  clickCounter += 1
}

const displayLetter = function (event) {
  event.preventDefault()
  console.log('here')
  console.log(event.target)
  if ($(event.target).text() === '') {
    if (clickCounter % 2 === 0) {
      displayX(event.target)
    } else {
      displayO(event.target)
    }
  }
}

const whoWon = function () {
  if (clickCounter <= 9) {
  if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('#message').text(player() + ' is the Winner!!')
$('.box').off()
  } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
    $('#message').text(' is the Winner!!')
    $('.box').off()
  }
} else {
  $('#message').text('Issa Draw')
}
}

module.exports = {
  displayLetter,
  whoWon
}


const tttArrray = ['', '', '', '', '', '', '', '', '']
let clickCounter = 0

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

module.exports = {
  displayLetter
}

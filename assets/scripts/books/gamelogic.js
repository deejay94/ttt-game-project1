const tttArray = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

let clickCounter = 0

const displayX = function (target) {
  clickCounter += 1 // increase clickCounter by 1
  $(target).text('X')
  const i = $(target).data('i')
  const j = $(target).data('j')
  tttArray[i][j] = 'X'
  console.log(target)
  console.log(i)
  console.log(j)
  console.log(clickCounter)
}
const displayO = function (target) {
  clickCounter += 1
  $(target).text('O')
  const i = $(target).data('i')
  const j = $(target).data('j')
  tttArray[i][j] = 'O'
  // console.log(j)
  // console.log(clickCounter)
}

const full = function () {
  if ($('.col').text() === 'X' || $('.col').text() === 'O') {
    $(this).attr('disabled', 'disabled')
  }
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


const displayLetter = function (event) {
  console.log(event.target)
  console.log('in this function')
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(tttArray[i][j] === ' ')
      if (tttArray[i][j] === ' ' && clickCounter % 2 === 0) {
        console.log('display x', clickCounter)
        displayX(event.target)
        break
      } else if (tttArray[i][j] === ' ' && clickCounter % 2 === 1) {
        console.log('display y', clickCounter)
        displayO(event.target)
        break
      } else {
        full()
        console.log('choose another square')
        $('#message').text('Please choose another square')
      }
    }
    console.log(tttArray)
    break
  }
}



module.exports = {
  displayLetter
}

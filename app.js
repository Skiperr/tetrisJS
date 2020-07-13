document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const StartButton = document.querySelector('#StartGameButton')
  const ScoreDisplay = document.querySelector('#Score')

  const width = 10

  const lTetromino = [
    [1, width+1, width*2+1,2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
  ]

const zTetromino = [
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1],
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1]
]

const tTetromino = [
  [1,width,width+1,width+2],
  [1,width+1,width+2,width*2+1],
  [width,width+1,width+2,width*2+1],
  [1,width,width+1,width*2+1]
]

const oTetromino = [
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1]
]

const iTetromino = [
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3],
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3]
]

const theTetrominos = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

  let currentPosition = 4
  let currentRotation = 0
  let random = Math.floor(Math.random()*theTetrominos.length)

  let current = theTetrominos[random][currentRotation]

function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add('tetromino')
  })
}

function undraw() {
  current.forEach(index =>{
    squares[currentPosition + index].classList.remove('tetromino')
  })
}
timerId = setInterval(moveDown,100)
function moveDown(){
  undraw()
  currentPosition += width;
  draw()
  freeze()
}

function freeze(){
  if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    random = Math.floor(Math.random() *  theTetrominos.length)
    current = theTetrominos[random][currentRotation]
    currentPosition = 4;
    draw()

  }
}

function moveLeft() {
undraw()
const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
  if(!isAtLeftEdge) currentPosition -=1


}


})

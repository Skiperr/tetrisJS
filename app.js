document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const startButton = document.querySelector('#StartGameButton')
  const scoreDisplay = document.querySelector('#Score')

  const width = 10
  let nextRandom = 0
  let timerId

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
  timerId = setInterval(moveDown,1000)

  function control(e){
    if (e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
        rotate()
    } else if (e.keyCode === 39) {
        moveRight()
    } else if (e.keyCode === 40) {
        moveDown()
    }
  }
  document.addEventListener('keydown',control)

  function moveDown(){
    undraw()
    currentPosition += width;
    draw()
    freeze()
  }

  function freeze(){
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      random = nextRandom
      nextRandom = Math.floor(Math.random() *  theTetrominos.length)
      current = theTetrominos[random][currentRotation]
      currentPosition = 4;
      draw()
      displayShape()

    }
  }

  function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if(!isAtLeftEdge) currentPosition -=1

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition +=1
    }
    draw()
  }
  function moveRight() {
    undraw()
    const isAtRightEge = current.some(index => (currentPosition + index) % width === width -1)

    if(!isAtRightEge) currentPosition +=1

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
    draw()
  }
  //rotate the iTetromino
  function rotate(){
    undraw()
    currentRotation ++
    if(currentRotation === current.length){
      currentRotation = 0
    }
    current = theTetrominos[random][currentRotation]
    draw()
  }

  const displaySquares = document.querySelectorAll('.mini-grid div')
  const displayWidth = 4
  let displayIndex = 0


  const upNextTetrominos = [
    [1, displayWidth+1, displayWidth*2+1,2],
    [0, displayWidth, displayWidth+1, displayWidth*2+1],
    [1,displayWidth, displayWidth+1, displayWidth+2],
    [0,1,displayWidth,displayWidth+1],
    [0,displayWidth+1,displayWidth*2+1,displayWidth*3+1]
  ]

  function displayShape() {
    displaySquares.forEach(square => {
      square.classList.remove('tetromino')
    })
    upNextTetrominos[nextRandom].forEach( index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
    })
  }

  startBsusdtton.addEventListener('click',() => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      draw()
      timerId = setInterval(moveDown,1000)
      nextRandom = Math.floor(Math.random() *  theTetrominos.length)
    }
  })
})

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

  const tTetromino
})

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
// let firstPlayer = "X"
// let secondPlayer = "O"
// let currentPlayer = "O"


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".square")
const messageEl = document.querySelector("#message")

console.log(squareEls)
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
}) 

//event bubbling




/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach((square, index) => {
    //console.log(index)
    console.log(squareEls[index])
    if (square === -1) {
      squareEls[index].textContent = "O"
    } else if (square === 1) {
      squareEls[index].textContent = "X"
    } else {
      squareEls[index].textContent = null
    }
  });


  if (winner === null) {
    turn === 1 ? messageEl.textContent = "Player 1's turn!!!" : messageEl.textContent = "Players 2's turn!!!" 
  } else if (winner === "T") {
    messageEl.textContent = "We are tie!!"
  } else { 
    winner === 1 ? messageEl.textContent = "Player 1 has won!!!" : messageEl.textContent = "player 2 has won!!!"
  }
}

function handleClick(event) {
  const sqIdx = parseInt(event.target.id.slice(2))
  if (board === sqIdx){
    return
  } else if (winner !== null) {
    return
  }
  //console.log(typeof sqIdx)
  //console.log('squareIndex' , sqIdx) 
  //console.log('It work')
  board[sqIdx] = turn
  turn = turn * (-1)

  getWinner ()
  render ()
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
      winner = 1
    } else if
      (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
      winner = -1
      } else {
        return null
      }
    }
    render()
  }




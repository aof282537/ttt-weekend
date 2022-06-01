/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[]]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
// let firstPlayer = "X"
// let secondPlayer = "O"
// let currentPlayer = "O"


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector(".square")
const messageEl = document.querySelector("#message")

console.log(squareEls)
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render()
}

function render() {
  board.foreach((square, index) => {
    if (square === -1) {
      squareEls[index].textcontent = "O"
    } else if (square === 1) {
      squareEls[index].textcontent = "X"
    } else {
      squareEls[index].textcontent = null
    }
  });


  if (winner === null) {
    return (turn === 1 ? messageEl.textcontent = "Player 1's turn!!!" : messageEl.textContent = "Players 2's turn!!!") 
  } else if (winner === "T") {
    return messageEl.textcontent = "We are tie!!"
  } else { 
    return (winner === 1 ? messageEl.textcontent = "Player 1 has won!!!" : messageEl.textcontent = "player 2 has won!!!")
  }
}


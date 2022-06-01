/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
// let firstPlayer = "X"
// let secondPlayer = "O"
// let currentPlayer = "O"


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector(".box")
const messageEl = document.querySelector("#message")

console.log(squareEls)
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  board = [null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null


}
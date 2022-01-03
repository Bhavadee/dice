let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn  = document.getElementById("rollBtn")
const  resetBtn = document.getElementById("resetBtn")


rollBtn.addEventListener("click",function()
{
 let d = Math.floor(Math.random()* 6)  + 1

 if (player1Turn)
 {
player1Dice.textContent = d
player1Dice.classList.remove("active")
player2Dice.classList.add("active")
message.textContent = "Player 2 Turn"
player1Score += d
player1Scoreboard.textContent = player1Score
 }else
 {
    player2Dice.textContent = d
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
    player2Score += d
    player2Scoreboard.textContent = player2Score

 }

 if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
} else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
 player1Turn = !player1Turn
})



// This will select the Computer Play.
function computerPlay() {
    let play = ['rock', 'paper', 'scissors']
    return play[Math.floor(Math.random() * 3)]
}

// THIS holds the score.
let playerCount = 0,
    computerCount = 0;

// THIS is a single round.
function playRps(player) {
    const playerChoose = player.toLowerCase(),
          computerChoose = computerPlay();
    console.log("Player choose: " + playerChoose)
    console.log("Computer choose: " + computerChoose)
    // rock > scissors | paper > rock | scissors > paper
    switch (playerChoose) {
        case "rock":
            if (computerChoose == "scissors") {
                playerCount++
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "paper") {
                computerCount++
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw!"
            }
            break;
        case "paper":
            if (computerChoose == "rock") {
                playerCount++
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "scissors") {
                computerCount++
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw!"
            }
            break;
        case "scissors":
            if (computerChoose == "paper") {
                playerCount++
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "rock") {
                computerCount++
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw!"
            }
            break;
    }
}
// THIS runs a 5 rounds game.
/*
function game() {
    for (i = 1; i <= 5; i++) {
        console.log('Round ' + i);
        console.log(playRps(prompt("Rock, Paper, Scissors. You choose:")))
    }
}
*/

// THIS array holds the options.
let game = document.getElementsByClassName("play")
// THIS run "playRps" ROCK
game[0].onclick = function () {
    let result = playRps("rock")
    document.getElementById('score').innerHTML = result
    document.getElementById("playerScore").innerHTML = playerCount
    document.getElementById("computerScore").innerHTML = computerCount
}
// THIS run "playRps" PAPER
game[1].onclick = function () {
    let result = playRps("paper")
    document.getElementById('score').innerHTML = result
    document.getElementById("playerScore").innerHTML = playerCount
    document.getElementById("computerScore").innerHTML = computerCount
}
// THIS run "playRps" SCISSORS
game[2].onclick = function () {
    let result = playRps("scissors")
    document.getElementById('score').innerHTML = result
    document.getElementById("playerScore").innerHTML = playerCount
    document.getElementById("computerScore").innerHTML = computerCount
}

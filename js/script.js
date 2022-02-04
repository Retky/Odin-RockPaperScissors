// This will select the Computer Play.
function computerPlay() {
    let play = ['rock', 'paper', 'scissors']
    return play[Math.floor(Math.random() * 3)]
}
// This is a single round
function playRps(player) {
    const playerChoose = player.toLowerCase(),
          computerChoose = computerPlay();
    console.log("Player choose: " + playerChoose)
    console.log("Computer choose: " + computerChoose)
    // rock > scissors | paper > rock | scissors > paper
    switch (playerChoose) {
        case "rock":
            if (computerChoose == "scissors") {
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "paper") {
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw"
            }
            break;
        case "paper":
            if (computerChoose == "rock") {
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "scissors") {
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw"
            }
            break;
        case "scissors":
            if (computerChoose == "paper") {
                return "You Win! " + playerChoose + " beats " + computerChoose
            } else if (computerChoose == "rock") {
                return "You Lose! " + computerChoose + " beats " + playerChoose
            } else {
                return "Draw"
            }
            break;
    }
}
// This runs a 5 rounds game.
function game() {
    for (i = 1; i <= 5; i++) {
        console.log('Round ' + i);
        console.log(playRps(prompt("chose")))
    }
}

game()

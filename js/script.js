// This will select the Computer Play.
function computerPlay() {
    let play = ['rock', 'paper', 'scissors']
    return play[Math.floor(Math.random() * 3)]
}
function playRps(player) {
    const playerChoose = player.toLowerCase();
    let computerChoose = computerPlay();
    console.log("player choose " + playerChoose)
    console.log("computer choose " + computerChoose)
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
console.log(playRps("scissors"));

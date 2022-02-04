function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissors']
    return play[Math.floor(Math.random() * 3)]
}
console.log(computerPlay())

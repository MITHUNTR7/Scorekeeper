const p1 = {
    score: 0,
    display: document.querySelector('#score1'),
    button: document.querySelector('#player1')

}

const p2 = {
    score: 0,
    display: document.querySelector('#score2'),
    button: document.querySelector('#player2')

}

const reset = document.querySelector('#reset')
const selectScore = document.querySelector('#scores')
let winningScore = 6
let isGameOver = false

selectScore.addEventListener('change', () => {

    winningScore = parseInt(selectScore.value)
    resetfn()

})

function scoreUpdate(player, opponent) {

    if (isGameOver === false) {
        player.score = player.score + 1
        player.display.innerText = player.score
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true
            opponent.button.disabled = true
        }
    }


}

p1.button.addEventListener('click', () => {

    scoreUpdate(p1, p2)

})

p2.button.addEventListener('click', () => {

    scoreUpdate(p2, p1)


})

reset.addEventListener('click', resetfn)


function resetfn() {

    isGameOver = false

    for (let p of [p1, p2]) {
        p.score = 0
        p.display.innerText = 0
        p.display.classList.remove('winner', 'loser')
        p.button.disabled = false
    }

}
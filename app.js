const btnOne = document.querySelector('#player1')
const btnTwo = document.querySelector('#player2')
const reset = document.querySelector('#reset')
const selectScore = document.querySelector('#scores')


let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')


let winningScore = 6
let isGameOver = false

let p1Score = 0
let p2Score = 0


selectScore.addEventListener('change',()=>{
    
    winningScore = parseInt(selectScore.value)
    resetfn()
    
})






btnOne.addEventListener('click', () => {

    if (isGameOver === false) {
        p1Score = p1Score + 1
        score1.innerText = p1Score
        if (p1Score === winningScore){
            isGameOver = true
            score1.classList.add('winner')
            score2.classList.add('loser')
        }
    }

})

btnTwo.addEventListener('click', () => {

    if (isGameOver === false) {
        p2Score = p2Score + 1
        score2.innerText = p2Score
        if (p2Score === winningScore) {
            isGameOver = true
            score1.classList.add('loser')
            score2.classList.add('winner')
        }
    }
    

})

reset.addEventListener('click',resetfn)


function resetfn(){
    isGameOver = false
    p1Score = 0
    p2Score = 0
    score1.innerText = 0
    score2.innerText = 0
    score1.classList.remove('winner', 'loser')
    score2.classList.remove('winner', 'loser')
}
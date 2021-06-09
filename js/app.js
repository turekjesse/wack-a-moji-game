// DOM ELEMENTS
// const resumeBtn = document.querySelector('.resume-btn')
// const pauseBtn = document.querySelector('.pause-btn')
const squares = document.querySelectorAll('.square')  // array
const score = document.querySelector('#score')
const time = document.querySelector('#time')
const startBtn = document.querySelector('.start-btn')
const overlay = document.querySelector('.overlay')
const gameResults = document.querySelector('.game-results')

// GLOBAL VARS
let mojiSquare;
let total = 0;
let startTime = 30;
let timer = null;
let timeDown = null;

let emojis = ['😀','😁','😂','😃','😄','😅','😆','😇','😈','😉','😊','😋','😌','😍','😎','😏','😐','😑','😒','😓','😔','😕','😖','😗','😘','😙','😚','😛','😜','😝','😞','😟','😠','😡','😢','😣','😤','😥','😦','😧','😨','😩','😪','😫','😬','😭','😮','😯','😰','😱','😲','😳','😴','😵','😶','😷','🙁','🙂','🙃','🙄','🤐','🤑','🤒','🤓','🤔','🤕','🤠','🤡','🤢','🤣','🤤','🤥','🤧','🤨','🤩','🤪','🤫','🤬','🤭','🤮','🤯','🧐',
]
// FUNCTIONS

function randomSquare() {
    squares.forEach(square => {
        square.innerHTML = ''
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.innerText = emojis[Math.floor(Math.random()*82)]
    mojiSquare = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == mojiSquare){
            total++
            score.innerHTML = `SCORE: 0${total}`
            if (total > 9) {
                score.innerHTML = `SCORE: ${total}`
            }
        }
    })
})

function clearSquares() {
    squares.forEach(square => {
        square.innerHTML = ''
    });
}            

function updateTime() {
    startTime --
    time.innerHTML = `TIME:  0${startTime}`
    if (startTime > 9) {
        time.innerHTML = `TIME:  ${startTime}`
    }
    if (startTime === 0) {
        clearInterval(timeDown)
        clearInterval(timer)
        clearSquares()
        endGame()
    }
};

function callUpdateTime() {
    timeDown = setInterval(updateTime, 1000)
}    

function moveMoji() {
    timer = setInterval(randomSquare,750)
}

function startGame() {
    overlay.style.display = 'none';
    moveMoji()
    callUpdateTime()
}

function endGame() {
    const restartBtn = document.createElement('button')
    restartBtn.innerText = 'RESTART'
    restartBtn.setAttribute('class', 'restart')
    restartBtn.addEventListener('click', () => document.location.reload())
    gameResults.innerHTML = `
        <h2>FINAL SCORE: ${total}</h2>`
    gameResults.appendChild(restartBtn); 
    restartBtn.addEventListener('click', () => document.location.reload())
    }

    // EVENT LISTENERS
startBtn.addEventListener('click', startGame)
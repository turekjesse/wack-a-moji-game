// DOM ELEMENTS
const squares = document.querySelectorAll('.square')  // array
const moji = document.querySelectorAll('.moji')
const score = document.querySelector('#score')
const time = document.querySelector('#time')
const startBtn = document.querySelector('.start-btn')
const resumeBtn = document.querySelector('.resume-btn')
const pauseBtn = document.querySelector('.pause-btn')
const overlay = document.querySelector('.overlay')

// GLOBAL VARS
let mojiSquare;
let total = 0;
let startTime = 30;
let timer = null;
let timeDown = null;

// FUNCTIONS

// 
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('moji')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('moji')
    mojiSquare = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == mojiSquare){
            total++
            score.innerHTML = `SCORE: 0${total}`
            if (total > 9) {
                score.innerHTML = `SCORE: ${total}`
            }
        }
    })
})

function updateTime() {
    startTime --
    time.innerHTML = `TIME:  0${startTime}`
    if (startTime > 9) {
        time.innerHTML = `TIME:  ${startTime}`
    }
    if (startTime === 0) {
        clearInterval(timeDown)
        clearInterval(timer)
    }
};

function callUpdateTime() {
    timeDown = setInterval(updateTime, 1000)
}    

function moveMoji() {
    timer = setInterval(randomSquare, 800)
}

function startGame() {
    overlay.style.display = 'none';
    moveMoji()
    callUpdateTime()
}


// EVENT LISTENERS
startBtn.addEventListener('click', startGame)
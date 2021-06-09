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
let mojiPosition;
let total = 0;
let startTime = 30;

// FUNCTIONS

// 
const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove('moji')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    // console.log(randomSquare)
    randomSquare.classList.add('moji')
    mojiPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == mojiPosition){
            total++
            score.innerHTML = total
        }
    })
})
 
const moveMoji = () =>{
    let timer = null;
    timer = setInterval(randomSquare, 800)
}

const startGame = () => {
    overlay.style.display = 'none';
    moveMoji()
}


// EVENT LISTENERS
startBtn.addEventListener('click', startGame)
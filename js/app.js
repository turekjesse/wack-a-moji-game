// DOM ELEMENTS
const squares = document.querySelectorAll('.square')  // array
const moji = document.querySelectorAll('.moji')
const score = document.querySelector('#score')
const time = document.querySelector('#time')

// GLOBAL VARS


// FUNCTIONS

// 
const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove('moji')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    // console.log(randomSquare)
    randomSquare.classList.add('moji')
}
 
const moveMoji = () =>{
    let timer = null;
    timer = setInterval(randomSquare, 800)
}

// moveMoji()


// EVENT LISTENERS

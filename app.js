/* Imports */

/* State */
let gameState = 'choice'; //choose or results
let choice = ''; //stone, cloth, or scythe
let computerChoice = 'stone'; //

/* Actions */
function loadPage() {
    displayResult();
}

function playAgain() {
    gameState;
    loadPage();
}
/* Components */
const stoneImg = document.getElementById('stone-img');
const clothImg = document.getElementById('cloth-img');
const scytheImg = document.getElementById('scythe-img');

const stone = document.getElementById('choose-stone');
const cloth = document.getElementById('choose-cloth');
const scythe = document.getElementById('choose-scythe');

const display1 = document.getElementById('display-1');

const playAgainButton = document.getElementById('play-again');

/* Component */
// get DOM
// display
function displayResult() {
    stoneImg.classList.remove('hide');
    clothImg.classList.remove('hide');
    scytheImg.classList.remove('hide');
}

if (choice === computerChoice) {
    display1;
}

// event listeners
playAgainButton.addEventListener('click', () => {
    playAgain();
});

stone.addEventListener('click', () => {
    choice = 'stone';
    gameState = 'results';
});
cloth.addEventListener('click', () => {
    choice = 'cloth';
    gameState = 'results';
});
scythe.addEventListener('click', () => {
    choice = 'scythe';
    gameState = 'results';
});
/* Run page load code */
loadPage();

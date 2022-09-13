/* Imports */

/* State */
let gameState = 'choice'; //choose or results
let choice = ''; //stone, cloth, or scythe
let computerChoice = 'stone'; //

/* Actions */
function loadPage() {
    displayResults();
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

const draw = document.getElementById('display-1');
const rockBeatsScythe = document.getElementById('display-2');
const scytheBeatsCloth = document.getElementById('display-3');
const clothBeatsRock = document.getElementById('display-4');
const rockBeatsScytheLoss = document.getElementById('display-5');
const scytheBeatsClothLoss = document.getElementById('display-6');
const clothBeatsRockLoss = document.getElementById('display-7');

const playAgainButton = document.getElementById('play-again');

/* Component */
// get DOM
// display
function displayResults() {
    stoneImg.classList.remove('hide');
    clothImg.classList.remove('hide');
    scytheImg.classList.remove('hide');
    if (choice === computerChoice) {
        draw;
    }
    if (choice === 'rock' && computerChoice === 'scythe') {
        rockBeatsScythe;
    }
    if (choice === 'scythe' && computerChoice === 'cloth') {
        scytheBeatsCloth;
    }
    if (choice === 'cloth' && computerChoice === 'rock') {
        clothBeatsRock;
    }
    if (choice === 'scythe' && computerChoice === 'rock') {
        rockBeatsScytheLoss;
    }
    if (choice === 'rock' && computerChoice === 'cloth') {
        clothBeatsRockLoss;
    }
    if (choice === 'cloth' && computerChoice === 'scythe') {
        scytheBeatsClothLoss;
    }
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

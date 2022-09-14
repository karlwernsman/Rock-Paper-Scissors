/* Imports */

/* State */
let gameState = 'choice'; //choose or results
let choice = ''; //stone, cloth, or scythe
const computerArray = ['stone', 'cloth', 'scythe'];
let computerChoice = getRandomItem(computerArray);

let wins = 0;
let total = 0;

/* Actions */
function loadPage() {
    scoreboardMath();
}

function playAgain() {
    gameState;
    loadPage();
}

function scoreboardMath() {
    winsConst.textContent = wins;
    totalConst.textContent = total;
    lossesConst.textContent = total - wins;
}

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

function winConditions() {
    console.log(choice);
    console.log(computerChoice);
    if (choice === computerChoice) {
        draw.classList.remove('hide');
        total++;
    }
    if (choice === 'stone' && computerChoice === 'scythe') {
        stoneBeatsScythe.classList.remove('hide');
        clothImg.classList.add('hide');
        total++;
        wins++;
    }
    if (choice === 'scythe' && computerChoice === 'cloth') {
        scytheBeatsCloth.classList.remove('hide');
        stoneImg.classList.remove('add');
        total++;
        wins++;
    }
    if (choice === 'cloth' && computerChoice === 'stone') {
        clothBeatsStone.classList.remove('hide');
        scytheImg.classList.add('hide');
        total++;
        wins++;
    }
    if (choice === 'scythe' && computerChoice === 'stone') {
        stoneBeatsScytheLoss.classList.remove('hide');
        clothImg.classList.add('hide');
        total++;
    }
    if (choice === 'stone' && computerChoice === 'cloth') {
        clothBeatsStoneLoss.classList.remove('hide');
        scytheImg.classList.add('hide');
        total++;
    }
    if (choice === 'cloth' && computerChoice === 'scythe') {
        scytheBeatsClothLoss.classList.remove('hide');
        stoneImg.classList.add('hide');
        total++;
    }
}
/* Components */
const winsConst = document.getElementById('wins');
const totalConst = document.getElementById('total');
const lossesConst = document.getElementById('losses');

const stoneImg = document.getElementById('stone-img');
const clothImg = document.getElementById('cloth-img');
const scytheImg = document.getElementById('scythe-img');

const stone = document.getElementById('choose-stone');
const cloth = document.getElementById('choose-cloth');
const scythe = document.getElementById('choose-scythe');

//const displays = document.getElementById('displays');
const draw = document.getElementById('display-1');
const stoneBeatsScythe = document.getElementById('display-2');
const scytheBeatsCloth = document.getElementById('display-3');
const clothBeatsStone = document.getElementById('display-4');
const stoneBeatsScytheLoss = document.getElementById('display-5');
const scytheBeatsClothLoss = document.getElementById('display-6');
const clothBeatsStoneLoss = document.getElementById('display-7');

const playAgainButton = document.getElementById('play-again');

/* Component */
// get DOM
// display
// function displayChoice() {
//     stoneImg.classList.remove('hide');
//     clothImg.classList.remove('hide');
//     scytheImg.classList.remove('hide');
// }

function displayResults() {
    winConditions();
}

// event listeners
playAgainButton.addEventListener('click', () => {
    playAgain();
});

stone.addEventListener('click', () => {
    choice = 'stone';
    gameState = 'results';
    displayResults();
});
cloth.addEventListener('click', () => {
    choice = 'cloth';
    gameState = 'results';
    displayResults();
});
scythe.addEventListener('click', () => {
    choice = 'scythe';
    gameState = 'results';
    displayResults();
});
/* Run page load code */
loadPage();

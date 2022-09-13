/* Imports */

/* State */
let gameState = ''; //choose or results
/* Actions */
function loadPage() {}

/* Components */
const stoneImg = document.getElementById('stone-img');
const clothImg = document.getElementById('cloth-img');
const scytheImg = document.getElementById('scythe-img');

/* Component */
// get DOM
// display
function displayChoice() {
    stoneImg.classList.remove('hide');
    clothImg.classList.remove('hide');
    scytheImg.classList.remove('hide');
}

// event listeners
stoneImg.addEventListener('click', () => {
    displayChoice();
});
/* Run page load code */
loadPage();

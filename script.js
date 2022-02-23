'use strict';

// Document elements
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = scoreEl.textContent;
let highscore = highscoreEl.textContent;

btnCheck.addEventListener('click', () => {
  if (isNaN(guess.value) || guess.value === '')
    message.textContent = displayMessage('⛔ Empty number field');
  else {
    const guessNum = Number(guess.value);

    score--;

    if (score === 0) {
      displayMessage('💥 You lost!');

      scoreEl.textContent = score;

      return;
    }

    if (guessNum > 0 && guessNum < 21) {
      if (guessNum === secretNumber) win();
      else if (guessNum > secretNumber) displayMessage('⬇️ Too high');
      else if (guessNum < secretNumber) displayMessage('⬆️ Too low');
    } else displayMessage('⛔ Number must be between 1 and 20!');
  }

  updateScore();
});

// Reset deafults
btnAgain.addEventListener('click', () => {
  number.style.width = '15rem';
  number.textContent = '?';
  guess.value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';

  score = 20;
  updateScore();
});

// Show win UI
function win() {
  displayMessage('🎉 Correct Number!');

  document.querySelector('body').style.backgroundColor = '#60b347';
  number.textContent = secretNumber;
  number.style.width = '30rem';

  if (highscore < score) {
    highscore = score;
  }
}

// Update score & highscore
function updateScore() {
  scoreEl.textContent = score;
  highscoreEl.textContent = highscore;
}

// Display a message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

'use strict';
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const messageText = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreText = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const image = document.querySelector('#img');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let message = '';
scoreText.textContent = score;
function playGame() {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message = '🙈 No Input';
  }
  if (score > 1) {
    if (guess <= 20 && guess > 0) {
      if (guess === secretNumber) {
        image.src = 'win.gif';
        image.style.display = 'inline';
        number.textContent = secretNumber;
        message = '🍾 Correct Answer';
        score++;
        document.body.style.backgroundColor = '#60b347';
        let right = document.querySelector('.right');
        right.style.background = "url('win.gif') no-repeat bottom";
        checkBtn.disabled = true;
      } else if (guess > secretNumber) {
        message = '📈 To High';
        score--;
      } else if (guess < secretNumber) {
        message = '📉 To Low';
        score--;
      }
    } else {
      alert('Guess the number between 1 and 20');
    }
  } else {
    image.src = 'lose.gif';
    image.style.display = 'inline';
    score--;
    message = '😢 You Lost try again';
    document.body.style.backgroundColor = 'red';
    checkBtn.disabled = true;
  }
  messageText.textContent = message;
  scoreText.textContent = score;
}

function playAgain() {
  image.style.display = 'none';
  number.textContent = '?';
  checkBtn.disabled = false;
  document.body.style.background = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  messageText.textContent = 'Start guessing...';
  scoreText.textContent = score;
  document.querySelector('.guess').value = '';
}

checkBtn.addEventListener('click', playGame);
againBtn.addEventListener('click', playAgain);

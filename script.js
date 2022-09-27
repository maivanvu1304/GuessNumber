let randomNumber = Math.trunc(Math.random() * 20) + 1;

const message = document.querySelector('.message');
let scort = 20;
const checkNumber = document.querySelector('.check');
checkNumber.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guess < 0 || guess > 20) {
    message.textContent = "💥💥 Input is't Corret";
  } else if (guess === randomNumber) {
    message.textContent = 'Corret 💕💕💕';
    const secretNumber = document.querySelector('.number');
    secretNumber.textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = scort;
  } else if (guess < randomNumber) {
    message.textContent = 'To lower';
    if (scort > 1) {
      scort--;
      const labelScort = document.querySelector('.score');
      labelScort.textContent = scort;
    } else {
      message.textContent = 'You Lose Game 💥💥💥💥💥';
      document.querySelector('body').style.backgroundColor = '#EE0000';
      document.querySelector('.score').textContent = 0;
      const secretNumber = document.querySelector('.number');
      secretNumber.textContent = randomNumber;
      document.querySelector('.header').textContent = 'The Number Correct Is';
    }
  } else if (guess > randomNumber) {
    message.textContent = 'To hight';
    if (scort > 1) {
      scort--;
      const labelScort = document.querySelector('.score');
      labelScort.textContent = scort;
    } else {
      message.textContent = 'You Lose Game 💥💥💥💥💥';
      document.querySelector('body').style.backgroundColor = '#EE0000';
      document.querySelector('.score').textContent = 0;
      const secretNumber = document.querySelector('.number');
      secretNumber.textContent = randomNumber;
      document.querySelector('.header').textContent = 'The Number Correct Is';
    }
  }
});

const btnAgain = document.querySelector('.again');
btnAgain.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.header').textContent = 'Guess My Number!';
  scort = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = scort;
  document.querySelector('.highscore').textContent = 0;
});

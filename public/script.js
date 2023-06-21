document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const score = document.getElementById('score');
    let scoreValue = 0;
    let timer;
  
    startBtn.addEventListener('click', startGame);
    yesBtn.addEventListener('click', checkAnswer);
    noBtn.addEventListener('click', checkAnswer);
  
    function startGame() {
      startBtn.disabled = true;
      scoreValue = 0;
      score.textContent = scoreValue;
      startRound();
    }
  
    function startRound() {
      clearInterval(timer);
      question.textContent = '';
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        question.textContent = 'Yes';
      } else {
        question.textContent = 'No';
      }
      timer = setInterval(startRound, 1000 - scoreValue * 10);
    }
  
    function checkAnswer(event) {
      const answer = event.target.id === 'yesBtn' ? 'Yes' : 'No';
      if (answer === question.textContent) {
        scoreValue++;
      } else {
        clearInterval(timer);
        startBtn.disabled = false;
        alert(`Game over! Your final score is ${scoreValue}.`);
      }
      score.textContent = scoreValue;
    }
  });
  
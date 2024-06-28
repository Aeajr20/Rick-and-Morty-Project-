const truths = [
    "What's the biggest secret you've ever kept from someone?",
    "Who do you have a crush on right now?",
    "What's the most embarrassing thing you've ever done?",
    "What's the last lie you told?",
    "What's a guilty pleasure you have?"
  ];
  
  const dares = [
    "Take a shot of your drink.",
    "Do an impression of another player until someone can guess who you are.",
    "Post an embarrassing photo on social media.",
    "Let another player draw on your face with a pen.",
    "Act like a chicken for 1 minute."
  ];
  
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('truth-or-dare-game');
  
  const gameHeader = document.createElement('h2');
  gameHeader.innerText = 'Truth or Dare Drinking Game';
  gameContainer.appendChild(gameHeader);
  
  const choiceBtnContainer = document.createElement('div');
  choiceBtnContainer.classList.add('choices');
  
  const truthBtn = document.createElement('button');
  truthBtn.innerText = 'Truth';
  truthBtn.onclick = showTruth;
  choiceBtnContainer.appendChild(truthBtn);
  
  const dareBtn = document.createElement('button');
  dareBtn.innerText = 'Dare';
  dareBtn.onclick = showDare;
  choiceBtnContainer.appendChild(dareBtn);
  
  gameContainer.appendChild(choiceBtnContainer);
  
  const resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  gameContainer.appendChild(resultDiv);
  
  document.getElementById('truth-or-dare-game').appendChild(gameContainer);
  
  function showTruth() {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    resultDiv.innerText = `Truth: ${randomTruth}`;
  }
  
  function showDare() {
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    resultDiv.innerText = `Dare: ${randomDare}`;
  }
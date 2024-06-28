
document.getElementById('trivia-game').innerHTML = `
  <div class="trivia">
    <h2>Trivia Game</h2>
    



  
  <p>Q1: Who is Rick's grandson?</p>
  <input type="text" id="answer1">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q2: What is the name of Rick's spaceship?</p>
  <input type="text" id="answer2">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q3: What is the name of Morty's crush?</p> 
  <input type="text" id="answer3">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q4: What is the name of the dimension where everything is on a cob?</p>
  <input type="text" id="answer4">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q5: What is the name of the amusement park inside a homeless man?</p>
  <input type="text" id="answer5">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q6: What is the name of Morty's math teacher?</p>
  <input type="text" id="answer6">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q7: What is the name of the creature that can only live in Rick's car battery?</p>
  <input type="text" id="answer7">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q8: What is the name of the song that Rick uses to save the Earth?</p>
  <input type="text" id="answer8">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q9: What is the name of the planet where the best ice cream in the multiverse is?</p>
  <input type="text" id="answer9">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q10: What is the name of the character who says "Ooh wee"?</p>
  <input type="text" id="answer10">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q11: What is the name of the game that Rick and Morty play in Blips and Chitz?</p>
  <input type="text" id="answer11">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q12: What is the name of the character who is a parody of Freddy Krueger?</p>
  <input type="text" id="answer12">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q13: What is the name of the dimension where humans evolved from wasps?</p>
  <input type="text" id="answer13">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q14: What is the name of the character who is a personal assistant for Rick?</p>
  <input type="text" id="answer14">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q15: What is the name of the character who is a mailman in the post-apocalyptic world?</p>
  <input type="text" id="answer15">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q16: What is the name of the character who is a talking cat?</p>
  <input type="text" id="answer16">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q17: What is the name of the character who is a talking dog?</p>
  <input type="text" id="answer17">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q18: What is the name of the character who is a giant head in the sky?</p>
  <input type="text" id="answer18">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q19: What is the name of the character who is a pickle?</p>
  <input type="text" id="answer19">
  <button onclick="checkTrivia()">Submit</button>

  <p>Q20: What is the name of the character who is a time-traveling testicle monster?</p>
  <input type="text" id="answer20">
  <button onclick="checkTrivia()">Submit</button>

  <div id="trivia-result"></div>
</div>

    <div id="trivia-result"></div>
  </div>
`;

// This function checks the answers to the trivia questions and calculates the score
function checkTrivia() {
    let score = 0; // Initialize score
  
    // Get the user's answers from the input fields
    const answer1 = document.getElementById('answer1').value.toLowerCase();

    const answer2 = document.getElementById('answer2').value.toLowerCase();

    const answer3 = document.getElementById('answer3').value.toLowerCase();

    const answer4 = document.getElementById('answer4').value.toLowerCase();

    const answer5 = document.getElementById('answer5').value.toLowerCase(); 

    const answer6 = document.getElementById('answer6').value.toLowerCase();

    const answer7 = document.getElementById('answer7').value.toLowerCase();

    const answer8 = document.getElementById('answer8').value.toLowerCase();

    const answer9 = document.getElementById('answer9').value.toLowerCase();

    const answer10 = document.getElementById('answer10').value.toLowerCase();

    const answer11 = document.getElementById('answer11').value.toLowerCase();

    const answer12 = document.getElementById('answer12').value.toLowerCase();

    const answer13 = document.getElementById('answer13').value.toLowerCase();

    const answer14 = document.getElementById('answer14').value.toLowerCase();

    const answer15 = document.getElementById('answer15').value.toLowerCase();

    const answer16 = document.getElementById('answer16').value.toLowerCase();

    const answer17 = document.getElementById('answer17').value.toLowerCase();

    const answer18 = document.getElementById('answer18').value.toLowerCase();

    const answer19 = document.getElementById('answer19').value.toLowerCase();

    const answer20 = document.getElementById('answer20').value.toLowerCase();
  
    // Check each answer and increment the score if the answer is correct
if (answer1 === 'Morty') score++;
if (answer2 === 'Spaceship') score++;
if (answer3 === 'correct answer 3') score++;
if (answer4 === 'correct answer 4') score++;
if (answer5 === 'correct answer 5') score++;
if (answer6 === 'correct answer 6') score++;
if (answer7 === 'correct answer 7') score++;
if (answer8 === 'correct answer 8') score++;
if (answer9 === 'correct answer 9') score++;
if (answer10 === 'correct answer 10') score++;
if (answer11 === 'correct answer 11') score++;
if (answer12 === 'correct answer 12') score++;
if (answer13 === 'correct answer 13') score++;
if (answer14 === 'correct answer 14') score++;
if (answer15 === 'correct answer 15') score++;
if (answer16 === 'correct answer 16') score++;
if (answer17 === 'correct answer 17') score++;
if (answer18 === 'correct answer 18') score++;
if (answer19 === 'correct answer 19') score++;
if (answer20 === 'correct answer 20') score++;

    // Continue for all answers...
  
    // Display the score in the 'trivia-result' div
    document.getElementById('trivia-result').innerText = `You scored ${score} out of 20!`;
  
    // Reset the score for the next round
    score = 0;
  }
  





  document.getElementById('trivia-result').innerText = result;




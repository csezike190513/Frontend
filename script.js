

// array of words
const words = [
  "legacy"
,"butterfly"
,"magnetic"
,"thunder"
,"horizon"
,"precious"
,"harmony"
,"celebrate"
,"island"
,"spectrum"
,"rainbow"
,"bubble"
,"eclipse"
,"treasure"
,"melody"
,"adventure"
,"galaxy"
,"firefly"
,"radiant"
,"victory"
,"mystery"
,"universe"
,"oasis"
,"sanctuary"
,"wilderness"
,"legend"
,"magic"
,"journey"
,"fortune"
,"paradise"
,"blossom"
,"pearl"
,"oasis"
,"miracle"
,"wisdom"
,"destiny"
,"fantasy"
,"paradise"
,"passion"
,"treasure"
,"serenity"
,"cosmic"
,"wonder"
,"enchantment"
,"infinity"
,"horizon"
,"harmony"
,"galaxy"
,"symphony"
,"dreamland"
];


// choose a random word
let word =words[Math.floor(Math.random() * words.length)];
//word = toUppercase(word);

// array to hold correct guesses
const correctGuesses = new Set();

// array to hold incorrect guesses
const incorrectGuesses = new Set();

// add keyboard to page
const keyboard = document.getElementById("keyboard");
for (let i = 97; i <= 122; i++) {
  const key = document.createElement("div");
  key.classList.add("key");
  key.textContent = String.fromCharCode(i);
  key.addEventListener("click", () => makeGuess(String.fromCharCode(i)));
  keyboard.appendChild(key);
}

  

// function to update the word
function updateWord() {
  const wordElement = document.getElementById("word");
  wordElement.innerHTML = "";
  for (let letter of word) {
    const span = document.createElement("span");
    span.textContent = correctGuesses.has(letter) ? letter : "_ ";
    wordElement.appendChild(span);
  }
}

// function to update the guesses
function updateGuesses() {
  const guessesElement = document.getElementById("guesses");
  guessesElement.innerHTML = `Correct Guesses: ${[...correctGuesses].join(", ")}<br>Incorrect Guesses: ${[...incorrectGuesses].join(", ")}`;
}

// function to make a guess
function makeGuess(letter) {
  if (word.includes(letter)) {
    correctGuesses.add(letter);
  } else {
    incorrectGuesses.add(letter);
    if(incorrectGuesses.size ===1){
      document.getElementById("kep").src = "kep/akasztofa2.png";
	  }
    if(incorrectGuesses.size ===2){
      document.getElementById("kep").src = "kep/akasztofa3.png";
	  }
    if(incorrectGuesses.size ===3){
      document.getElementById("kep").src = "kep/akasztofa4.png";
	  }
    if(incorrectGuesses.size ===4){
      document.getElementById("kep").src = "kep/akasztofa5.png";
	  }
    if(incorrectGuesses.size ===5){
      document.getElementById("kep").src = "kep/akasztofa6.png";
	  }
  }
  updateWord();
  updateGuesses();
  checkWin();
}

// function to check for a win
function checkWin() {
  if ([...word].every(letter => correctGuesses.has(letter))) {
    
    const win = document.getElementById("word");
    win.innerHTML  = `<h2 class="win">You Win!</br>The word was: `+word+`.</h2>`;
    document.getElementById("kep").src = "kep/akasztofaWIN.png";
    wordElement.appendChild(win);
  } else if (incorrectGuesses.size === 6) {
    const lose = document.getElementById("word");
    lose.innerHTML = `<h2 class="lose">Game Over!</br>The word was: `+word+`. </br>Try again!</h2>`;
    document.getElementById("kep").src = "kep/akasztofaLOSE.png";
    wordElement.appendChild(lose);
    }
    
    }
    
    
    // update the word and guesses on page load
    updateWord();
    updateGuesses();
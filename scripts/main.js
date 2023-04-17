//word = toUppercase(word);

// array to hold correct guesses
const correctGuesses = new Set();

// array to hold incorrect guesses
const incorrectGuesses = new Set();

const keyboards = document.getElementById("keyboard");
Keyboard.keyboardadd(keyboards);

makeguess.makeGuess(incorrectGuesses);
removes.removeClickListenersAndSetClass();

// update the word and guesses on page load
Updateword.updateWord(correctGuesses);
Updateguesses.updateGuesses();
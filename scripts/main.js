//word = toUppercase(word);
// array to hold correct guesses
const correctGuesses = new Set();
// array to hold incorrect guesses
const incorrectGuesses = new Set();

//billentyűzet helye
const keyboards = document.getElementById("keyboard");
Keyboard.KeyBoardAdd(keyboards);

MakeGuess.makeGuess(incorrectGuesses);
removes.removeClickListenersAndSetClass();

// update the word and guesses on page load
UpdateWord.updateWord(correctGuesses);
UpdateGuesses.updateGuesses();
//word = toUppercase(word);
// array to hold correct guesses
const correctGuesses = new Set();
// array to hold incorrect guesses
const incorrectGuesses = new Set();

// update the word and guesses on page load
UpdateGuesses.updateGuesses();
UpdateWord.updateWord(correctGuesses);
let word = UpdateWord.returnWord();


//billentyűzet helye
const keyboards = document.getElementById("keyboard");
Keyboard.KeyBoardAdd(keyboards);


MakeGuess.makeGuess(incorrectGuesses,word);
Remove.removeClickListenersAndSetClass();


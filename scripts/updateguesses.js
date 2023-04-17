// function to update the guesses
function updateGuesses() {
    const guessesElement = document.getElementById("guesses");
    guessesElement.innerHTML = `Correct Guesses: ${[...correctGuesses].join(", ")}<br>Incorrect Guesses: ${[...incorrectGuesses].join(", ")}`;
  }
const UpdateGuesses= (function()
{
    var self = 
    {
// function to update the guesses
updateGuesses: function() {
    const guessesElement = document.getElementById("guesses");
    guessesElement.innerHTML = `Correct Guesses: ${[...correctGuesses].join(", ")}<br>Incorrect Guesses: ${[...incorrectGuesses].join(", ")}`;
  }
};

return self;

})();
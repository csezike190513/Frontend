// function to check for a win
function checkWin() {
    if ([...word].every(letter => correctGuesses.has(letter))) {
      
      const win = document.getElementById("word");
      win.innerHTML  = `<h2 class="win">You Win!</br>The word was: `+word+`.</br>Congratulation!</h2>`;
      document.getElementById("kep").src = "kep/akasztofaWIN.png";
      wordElement = win;
      removeClickListenersAndSetClass();//document.getElementById(startsWith("key_")).removeEventListener("click", null).id= "hasznaltkey";
      }
      else if (incorrectGuesses.size === 6) {
        const lose = document.getElementById("word");
        lose.innerHTML = `<h2 class="lose">Game Over!</br>The word was: `+word+`. </br>Try again!</h2>`;
        document.getElementById("kep").src = "kep/akasztofaLOSE.png";
        wordElement = lose;
        removeClickListenersAndSetClass();//document.getElementById(startsWith("key_")).removeEventListener("click", null).id= "hasznaltkey";
    }
  }
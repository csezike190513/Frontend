// function to make a guess
function makeGuess(letter,i) {
    if (word.includes(letter)) {
      correctGuesses.add(letter);
      let keyletter = document.getElementById("key_"+String(i));
      keyletter.removeEventListener("click", null);
      keyletter.id= "hasznaltkey";
    } else {
      incorrectGuesses.add(letter);
      let keyletter = document.getElementById("key_"+String(i));
      keyletter.removeEventListener("click", null);
      keyletter.id= "hasznaltkey";
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
// array of words
const words = [
  "legacy","butterfly","magnetic","thunder","horizon","harmony","celebrate","island","spectrum","rainbow","bubble","eclipse"
  ,"treasure","melody","adventure","galaxy","firefly","radiant","victory","mystery","universe","oasis","wilderness","legend"
  ,"magic","journey","fortune","paradise","blossom","pearl","oasis","miracle","wisdom","destiny","fantasy","paradise","passion"
  ,"treasure","cosmic","wonder","infinity","horizon","harmony","galaxy","symphony","dreamland","departure","cookie","area"
  ,"employee","association","restaurant","intention","month","client","video","love","warning","transport","response","volume"
  ,"activity","vehicle","satisfaction","tale","lady","cancer","ladder","guitar","knowledge","error","assistant","army","percentage"
  ,"confusion","tongue","king","poem","excitement","government","exam","cabinet","competition","bonus","engineer","memory"
  ,"potato","professor","strategy","find","contribution","appointment","bread"
];

// choose a random word
let word = words[Math.floor(Math.random() * words.length)];


// function to update the word
function updateWord(correctGuesses) {
    const wordElement = document.getElementById("word");
    wordElement.innerHTML = "";
    for (let letter of word) {
      const span = document.createElement("span");
      span.textContent = correctGuesses.has(letter) ? letter : "_ ";
      wordElement.appendChild(span);
    }
  }
  
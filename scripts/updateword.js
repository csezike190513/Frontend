const UpdateWord = (function()
{

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


    var self = 
    {

      // function to update the word
      updateWord: function(correctGuesses) {
          
          const wordElement = document.getElementById("word");
          wordElement.innerHTML = "";
          for (let letter of word) {
            const span = document.createElement("span");
            span.textContent = correctGuesses.has(letter) ? letter : "_ ";
            wordElement.appendChild(span);
          }
      },

      returnWord: function(){
         let wordss = word;
      }
};

return self;

})();
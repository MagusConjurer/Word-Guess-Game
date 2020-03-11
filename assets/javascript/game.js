var guessGame = {

    words: ["test"],
    answer: "",
    correctGuess: "",
    usedLetters: "",
    numberOfGuesses: 10,
    wins: 0,

    // Select a word from the list of words
    startGame: function () {

        // Set the number of guesses to 10
        numberOfGuesses = 10;

        // Use random number to select a word from the array
        var randNum = Math.floor(Math.random() * this.words.length);

        // Make this word the answer
        this.answer = this.words[randNum];

        // Set correctGuess to "_ _ _" with the matching number of spaces
        this.correctGuess = "";
        for(i = 0; i < this.answer.length; i++) {
            this.correctGuess += "_ ";
        }
    },

    // Add a guess to the usedLetters, correctGuess and or answer
    userGuess: function(letter) {

        // Add to usedLetters
        if(this.usedLetters.includes(letter) == false){
            this.usedLetters += letter + " ";
        }
        // Check if letter is in the selected word
        if(this.answer.includes(letter) && this.correctGuess.includes(letter) == false && this.numberOfGuesses > 0){
            // If it is, replace a the index of the letter in correctGuess
            var splitAnswer = this.answer.split("");
            var splitGuess = this.correctGuess.split("");
            console.log(splitAnswer, splitGuess);
            for(var j = 0; j < splitAnswer.length; j++){
                console.log("in the loop");
                if(splitAnswer[j] === letter){
                    console.log(j, " letter matches index");
                    if(j == 0){
                        console.log("index = 0");
                        splitGuess[j] = letter;
                        this.correctGuess = splitGuess.join("");
                    }else{
                        console.log("index does not = 0");
                        splitGuess[j*2] = letter;
                        this.correctGuess = splitGuess.join("");
                    }
                }
            }
            this.correctGuess[(this.answer.indexOf(letter))] = letter;
            console.log(this.answer.indexOf(letter), this.correctGuess);
        }else if(this.numberOfGuesses > 0){
            // If not, remove one from numberOfGuesses
            this.numberOfGuesses--;
        }         
    },
}

// Select a word and set all the values to default
guessGame.startGame();

// getElementByID each element that is going be be replaced

document.onkeyup = function(event){

    var userInput = event.key.toLowerCase();
    
    // Using regex pattern to identify if input is a letter
    var alphabet = new RegExp(/^[a-z]$/i);
    if(alphabet.test(userInput)){

        guessGame.userGuess(userInput);
        
    }
    var numWins = document.getElementById("numWins");
    var wordText = document.getElementById("wordText");
    var lettersText = document.getElementById("lettersText");
    var numGuesses = document.getElementById("numGuesses");

    numWins.textContent = "Wins: " + guessGame.wins;
    wordText.textContent = guessGame.correctGuess;
    lettersText.textContent = guessGame.usedLetters;
    numGuesses.textContent = guessGame.numberOfGuesses;    
}

// Replace the elements for answer, correctGuess, etc



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

        console.log(letter + " is the guess.");
        // Add to usedLetters
        // Check if letter is in the selected word
            // If it is, replace a the index of the letter in correctGuess
            // If not, remove one from numberOfGuesses

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
}

// Replace the elements for answer, correctGuess, etc
var numWins = document.getElementById("numWins");
var wordText = document.getElementById("wordText");
var lettersText = document.getElementById("lettersText");
var numGuesses = document.getElementById("numGuesses");

numWins.textContent = "Wins: " + guessGame.wins;
wordText.textContent = guessGame.correctGuess;
lettersText.textContent = guessGame.usedLetters;
numGuesses.textContent = guessGame.numberOfGuesses;


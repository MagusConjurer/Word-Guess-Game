var guessGame = {

    words: [],
    answer: "",
    correctGuess: "",
    usedLetters: "",
    numberOfGuesses: 10,
    wins: 0,

    // Select a word from the list of words
    startGame: function () {
        // Set wins to 0 and number of guesses to 10
        // Use random number to select a word from the array
        // Make this word the answer
        // Set correctGuess to "_ _ _" with the matching number of spaces
    },

    // Add a guess to the usedLetters, correctGuess and or answer
    userGuess: function(letter) {
        // Add to usedLetters
        // Check if letter is in the selected word
            // If it is, replace a the index of the letter in correctGuess
            // If not, remove one from numberOfGuesses

    },
}

// getElementByID each element that is going be be replaced

document.onkeyup = function(event){

    var userInput = event.key.toLowerCase();
    
    // Using regex pattern to identify if input is a letter
    var alphabet = new RegExp(/^[a-z]$/i);
    if(alphabet.test(userInput)){

        console.log(userInput + " is a letter.");

        // Select a word and set all the values to default
        guessGame.startGame();
        
    }    
}

// Replace the elements for answer, correctGuess, etc
var numWins = document.getElementById("numWins");
var wordText = document.getElementById("wordText");
var lettersText = document.getElementById("lettersText");
var numGuesses = document.getElementById("numGuesses");

numWins.textContent = "Wins: " + guessGame.wins;
wordText.textContent = "_ _ _ _ _"
lettersText.textContent = "a b c d e"
numGuesses.textContent = guessGame.numberOfGuesses;


var guessGame = {

    words = [],
    answer = "",
    correctGuess = "",
    usedLetters = "",
    numberOfGuesses = 10,
    wins = 0,

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
// startGame
// Get key event
// Replace the elements for answer, correctGuess, etc
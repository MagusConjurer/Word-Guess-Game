var guessGame = {

    words: ["dragon", "fire", "hoard", "cavern", "wings", "claws"],
    answer: "",
    correctGuess: "",
    usedLetters: "",
    numberOfGuesses: 10,
    wins: 0,
    roundWon: false,

    // Select a word from the list of words
    startGame: function () {

        // Reset the guessed letters.
        this.usedLetters = "";

        // Set the number of guesses to 10
        this.numberOfGuesses = 10;
        this.roundWon = false;

        // Use random number to select a word from the array
        var randNum = Math.floor(Math.random() * this.words.length);

        // Make this word the answer
        this.answer = this.words[randNum];

        // Set correctGuess to "_ _ _" with the matching number of spaces
        this.correctGuess = "";
        for(i = 0; i < this.answer.length; i++) {
            this.correctGuess += "_ ";
        }
        
        

        console.log(randNum, this.answer, this.correctGuess, this.usedLetters);
    },

    // Add a guess to the usedLetters, correctGuess and or answer
    userGuess: function(letter) {
        console.log("In userGuess:", this.answer, this.correctGuess, this.usedLetters, this.roundWon);

        // Add to usedLetters
        if(this.usedLetters.includes(letter) == false && this.numberOfGuesses > 0 && this.roundWon == false){
            this.usedLetters += letter + " ";

            // Check if letter is in the selected word
            if(this.answer.includes(letter) && this.correctGuess.includes(letter) == false){
                // Split the two strings into arrays
                var splitAnswer = this.answer.split("");
                var splitGuess = this.correctGuess.split("");

                // Increment through the answer array (allowing for multiple letters)
                for(var j = 0; j < splitAnswer.length; j++){
                    if(splitAnswer[j] === letter){
                        splitGuess[j*2] = letter;
                        this.correctGuess = splitGuess.join("");
                    }
                }
            }else{
                // If not, remove one from numberOfGuesses
                this.numberOfGuesses--;
            }
        }        
    },
}

// Select a word and set all the values to default
guessGame.startGame();

var numWins = document.getElementById("numWins");
var wordText = document.getElementById("wordText");
var lettersText = document.getElementById("lettersText");
var numGuesses = document.getElementById("numGuesses");
var gameImage = document.getElementById("gameImage");

// getElementByID each element that is going be be replaced

document.onkeyup = function(event){

    var userInput = event.key.toLowerCase();
    
    // Using regex pattern to identify if input is a letter
    var alphabet = new RegExp(/^[a-z]$/i);
    if(alphabet.test(userInput)){

        guessGame.userGuess(userInput);
        
    }

    // Check for win
    console.log(guessGame.correctGuess.replace(/ /g, ""));

    if(guessGame.answer === guessGame.correctGuess.replace(/ /g, "") && guessGame.numberOfGuesses > 0 && guessGame.roundWon == false) {
        guessGame.roundWon = true;
        gameImage.src = "assets/images/clipart_library_treasure.gif";
        gameImage.alt = "Treasure for the winner";
        guessGame.wins++;
    }

    if(guessGame.numberOfGuesses == 0){
        gameImage.src = "assets/images/clipartix_dragonfire.gif";
        gameImage.alt = "Angry dragon";
    }

    numWins.textContent = "Wins: " + guessGame.wins;
    wordText.textContent = guessGame.correctGuess;
    lettersText.textContent = guessGame.usedLetters;
    numGuesses.textContent = guessGame.numberOfGuesses;    
}

document.getElementById("button").onclick = function(){
    guessGame.startGame();
    console.log(this.answer, this.correctGuess, this.usedLetters);
    gameImage.src = "assets/images/clipartix_dragon.png";
    gameImage.alt = "Fun dragon";
    numWins.textContent = "Wins: " + guessGame.wins;
    wordText.textContent = guessGame.correctGuess;
    lettersText.textContent = guessGame.usedLetters;
    numGuesses.textContent = guessGame.numberOfGuesses; 
}





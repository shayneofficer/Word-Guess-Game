// Counters for wins and guesses
var wins = 0;
var guessesRemaining = 12;

// Array of strings to guess
var titles = [
    "Iron Fist",
    "Between",
    "Friends From College",
    "Disjointed",
    "Neo Yokio",
    "Marseille",
    "Girlboss",
    "Fuller House",
    "Gypsy",
    "Hemlock Grove",
    "Flaked",
    "Haters Back Off",
    "Thirteen Reasons Why",
    "Kiss Me First",
    "Damnation",
    "Bloodline",
    "Marco Polo",
    "The Punisher",
    "Altered Carbon",
    "Ozark",
    "Lost In Space",
    "The Ranch",
    "Troy Fall of a City",
    "Everything Sucks",
    "Collateral",
    "The OA",
    "The Defenders",
    "Safe",
    "Atypical",
    "Seven Seconds",
    "Santa Clarita Diet",
    "The Rain",
    "House of Cards",
    "The Get Down",
    "Requiem",
    "Grace and Frankie",
    "F is for Family",
    "Three Percent",
    "Anne with an E",
    "Castlevania",
    "Dark",
    "Jessica Jones",
    "Daredevil",
    "Luke Cage",
    "The Mechanism",
    "Godless",
    "The Crown",
    "BoJack Horseman",
    "Narcos",
    "Sacred Games",
    "Orange is the New Black",
    "Stranger Things",
    "On My Block",
    "Love",
    "GLOW",
    "Mindhunter",
    "Lady Dynamite",
    "Easy",
    "A Series of Unfortunate Events",
    "Unbreakable Kimmy Schmidt",
    "American Vandal",
    "One Day at a Time",
    "Alias Grace",
    "Dear White People",
    "Big Mouth",
    "Master of None",
]

// Array of every letter
var alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

// Array of letters already guessed
var guesses = [];

// Assign pointers to important html elements to variables
var wordBox = document.getElementById("word-box");
var lettersGuessedBox = document.getElementById("letters-guessed-box");
var numberRemainingGuessesBox = document.getElementById("missed-box");

// Generate a random index of the titles array and return the string at that index
function pickTitle() {
    return titles[Math.floor(Math.random() * titles.length)];
}

// Assign the random string to a variable computerPick
var computerPick = pickTitle();

console.log(computerPick);

// Use the chosen string to generate a sequence of underscores to print
function writeCurrentWord(word) {
    var currentWord = "";

    // Iterate through all the characters of the chosen string (except the last)
    for (var i = 0; i < word.length - 1; i++) {
        if (word.charAt(i) === " ") { // If the character at this index of the string is a space...
            currentWord += "  "; // ... add a space to the underscores string
        }
        else if (guesses.indexOf(word.charAt(i) === -1)) { // If the character at the index hasn't aleady been guessed...
            currentWord += "_ "; // ... add an underscore to the underscores string
        }
        else { // If the character isn't a space and *has* been guessed...
            currentWord += word.charAt(i); // ... add the guessed character to our underscores string
        }
    }

    // Then we handle the final character of our string
    if (guesses.indexOf(word.charAt(word.length - 1)) === -1) { // If the final character hasn't already been guessed...
        currentWord += "_"; // ... add an underscore to our underscores string (note no trailing space)
    }
    else { // If the final character *has* already been guessed
        currentWord += word.charAt(word.length - 1); // ... add the guessed character to our underscores string
    }
    console.log(currentWord);

    // Print the underscores string to our word box on screen
    wordBox.textContent = currentWord;
}

writeCurrentWord(computerPick);

function writeGuessedCharacters() {
    var guessedLettersString = "";
    for (var i = 0; i < guesses.length - 1; i++) {
        guessedLettersString += guesses[i] + ", ";
    }
    guessedLettersString += guesses[guesses.length - 1];

    lettersGuessedBox.textContent = guessedLettersString;
}

function resetGame() {
    computerPick = pickTitle(); // Pick a new string to guess...
    writeCurrentWord(computerPick); // ... print the underscore string...
    guessesRemaining = 12; // ... reset guesses remaining...
    numberRemainingGuessesBox.textContent = guessesRemaining; // ... print our reset guess count...
    guesses = []; // ... reset the guesses array...
    writeGuessedCharacters(); // ... print our empty guesses array...

}

document.onkeyup = function (event) {
    userInput = event.key;
    userInput = userInput.toUpperCase();

    if (alphabet.indexOf(userInput !== -1) && guesses.indexOf(userInput) === -1) { // If the input is a letter, and hasn't already been guessed
        guesses.push(userInput); // ... add the letter to our guesses array
        console.log(guesses);

        if (computerPick.toUpperCase().includes(userInput)) { // If the input is in our string (correct guess)...
            writeCurrentWord(computerPick); // ... rewrite the underscores string with correct guess filled in
        }
        else { // If the input is *not* in our string (incorrect guess)...
            writeGuessedCharacters(); // ... add the guessed letter to our printed guessed characters...
            guessesRemaining--; // ... and remove one guess remaining...
            numberRemainingGuessesBox.textContent = guessesRemaining;
        }

    } // If the input isn't a letter, do nothing

    if (guessesRemaining === 0) { // If we've run out of guesses...
        resetGame(); // ... reset the game

    }
}
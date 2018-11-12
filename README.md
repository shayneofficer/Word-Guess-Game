# Word-Guess-Game

## About
Hangman with a theme of Netflix original series

## TODO
1. Display a message, increase win count, and reset game when a word is guessed correctly.
2. Fix bug: when a player fails to guess a word correctly, the next word's letters are shown based on guesses from the previous round (these vanish when a player starts guessing, but it still gives away most of the word)
3. Get spaces to show up in the underscore string. The if statement appears to recognize that spaces are present, but doesn't execute the associated block of code. Alternatively, concatenating the string "  " is ignored?
4. Refactor: more of the code could be split out into reused functions. Similarly, functions like `writeCurrentWord()` seem inefficient.
5. Style to fit Netflix theme
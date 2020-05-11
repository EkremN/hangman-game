const Hangman = function (word, numberOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.guessedLetter = []
    this.status = 'paying'
}

Hangman.prototype.calculateStatus = function() {
    let finish = true;

    this.word.forEach((letter) => {
        if(this.guessedLetter.includes(letter)) {

        } else {
            finish = false
        }
    })

    if (this.numberOfGuesses === 0) {
        this.status = 'failed'
    } else if (finish) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.pazzleGame = function() {
    let puzzle = ''
    this.word.forEach((letter) => {
        if(this.guessedLetter.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

Hangman.prototype.myLetter = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetter.push(guess)
    } 
    if (isUnique && isBadGuess) {
        if (this.numberOfGuesses > 0) {
        this.numberOfGuesses--
        }
    }
    this.calculateStatus()
}
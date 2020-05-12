class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.numberOfGuesses = numberOfGuesses
        this.guessedLetter = []
        this.status = 'playing'
    }
    calculateStatus() {
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
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left ${this.numberOfGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Well done! You guessed the word!'
        }
    }
    pazzleGame() {
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
    myLetter(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetter.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
    
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
}
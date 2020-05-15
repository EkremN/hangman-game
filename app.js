const numberOfGuesses = document.querySelector("#number-of-guesses")
const elementH2 = document.createElement('h2')
    
const root = document.querySelector("#root")
const elemtnP = document.createElement('p')

const game1 = new Hangman("laptop", 3) 

numberOfGuesses.appendChild(elementH2)
root.appendChild(elemtnP)

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.myLetter(guess)
    elementH2.textContent = game1.StatusMessage
    elemtnP.textContent =game1.pazzleGame
})
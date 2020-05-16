// const numberOfGuesses = document.querySelector("#number-of-guesses")
// const elementH2 = document.createElement('h2')
    
// const root = document.querySelector("#root")
// const elemtnP = document.createElement('p')

// const game1 = new Hangman("Novi Pazar is the best", 3) 

// numberOfGuesses.appendChild(elementH2)
// root.appendChild(elemtnP)

// window.addEventListener("keypress", (e) => {
//     const guess = String.fromCharCode(e.charCode)
//     game1.myLetter(guess)
//     elementH2.textContent = game1.StatusMessage
//     elemtnP.textContent =game1.pazzleGame
// })

// getPuzzle((error, puzzle) => {
//     if(error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// // const countryCode = "BA"
// // const request2 = new XMLHttpRequest()

// // request2.addEventListener('readystatechange', (e) => {
// //     if (e.target.readyState === 4 && e.target.status === 200) {
// //         const data = JSON.parse(e.target.responseText)
        
// //         // second way of doing it
// //         // const country = data.find((country) => country.alpha2Code === countryCode)
// //         // console.log(country.name)

// //         for(let i = 0; i < data.length; i++) {
// //             if (data[i].alpha2Code === countryCode) {
// //                 console.log(data[i].name)
// //             }
// //         }
// //     } else {
// //         if(e.target.readyState === 4) {
// //             console.log("You have an error!!!")
// //         }
// //     }
// // })

// // request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// // request2.send()
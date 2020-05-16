// const getPuzzle = ((callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             console.log(data)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
//     request.send()
// })



const posts = [
    {title: 'Post One', body: 'This is the post one!'},
    {title: 'Post Two', body: 'This is the post two!'}
]

const getPost = (() => {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.body}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
})

getPost()

const createPost = ((post) => {
    setTimeout(() => {
        posts.push(post)
    }, 2000);
})

createPost({title: 'Post three', body: 'This is body of post three'});

document.addEventListener("DOMContentLoaded", () => {
    getChar()
    // displayChar()
})
let url = "http://localhost:3000/characters"
function getChar(){
    fetch(url)
    .then(res => res.json())
    .then(info => {
        console.log(info)
        info.forEach(characters => {
        // console.log(characters);
        displayChars(characters);
    });
})
}
function displayChars(characters){
    // characters.preventDefault()
    console.log(characters.name);
    let name = document.createElement('p')
    name.textContent = characters.name
    let main = document.getElementById("main")
    main.append(name)
    name.addEventListener('click', () =>{
        getOneChar(characters)
    })
}
function getOneChar(characters){
    document.getElementById("charname").textContent = characters.name
    document.getElementById("charimg").src = characters.image
    document.getElementById("charvotes").textContent = `Votes cast: ${characters.votes}`

    let btn = document.getElementById("charvotes")
    btn.textContent = `Votes: ${characters.votes}`
    btn.addEventListener('click', () => {
        characters.votes+=1
        btn.textContent = `Votes: ${characters.votes}`
    })
        let btn2 = document.getElementById("reset-btn")
        // btn2.textContent = `Votes: ${characters.votes}`
        btn2.addEventListener('click', () => {
            characters.votes = 0
            btn.textContent = `Votes: ${characters.votes}`
            // resetVotes(characters)
            // btn.textContent = `Votes: ${characters.votes}`
    })
}

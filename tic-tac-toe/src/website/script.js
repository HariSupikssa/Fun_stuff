

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnO = true
let hasWin = false
let gameOver = false
let moveCount = 0
let sword = "../resources/sword-img.png"
let bomb = "../resources/bomb-img.png"

let swordName = sword.split("/").pop()
let bombName = bomb.split("/").pop()

let msgCon = document.querySelector('.msgContainer')
let msg = document.querySelector('.msg')
let boxes = document.querySelectorAll('.box')
let restartBtn = document.querySelector('#restartBtn')


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.dataset.clicked === "true" || gameOver) return

        box.dataset.clicked = "true"

        const img = document.createElement('img')
        let source = turnO ? bomb : sword
        img.src = source
        img.style.width = "95%"
        img.style.height = "95%"

        box.appendChild(img)

        turnO = !turnO
        moveCount++
        checkWinner()
    })
})

const checkWinner = () => {

    for (let pattern of winPatterns) {
        let img1 = boxes[pattern[0]].querySelector("img");
        let img2 = boxes[pattern[1]].querySelector("img");
        let img3 = boxes[pattern[2]].querySelector("img");
        // gives <img>

        let val1 = img1 ? img1.src.split("/").pop() : null;
        let val2 = img2 ? img2.src.split("/").pop() : null;
        let val3 = img3 ? img3.src.split("/").pop() : null;
        // checks if <img> exists, take src else null

        if (val1 !== null && val2 !== null && val3 !== null && val1 === val2 && val2 === val3) {
            hasWin = true
            gameOver = true

            // val1 = val1.split("/").pop()

            // let winner = val1 === sword ? "O" : "eieioeowsdkdfj"
            // console.log(val1)
            // console.log(sword)
            // val1 which is img.src is absolute path while sword is relative path so they always gonna be false


            let winner = val1 === bombName ? "O" : "X"
            // document.querySelector(".err").innerHTML = `val1 = ${val1}, swordName = ${swordName}`

            console.log(winner)
            showWinner(winner)
            return


        }
    }
    if (!hasWin && moveCount === 9) {
        msg.innerHTML = "It's a draw!"
        msgCon.classList.remove("hide")
        gameOver = true
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `${winner} wins!`
    msgCon.classList.remove("hide")
}

restartBtn.addEventListener('click', () => {
    enableBoxes()
    msg.innerHTML = ""
    msgCon.classList.add("hide")
    turnO = true
    hasWin = false
    gameOver = false
    moveCount = 0
})

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.dataset.clicked = false
        const img = box.querySelector("img")
        if (img) {
            img.remove()
        }
    })
}
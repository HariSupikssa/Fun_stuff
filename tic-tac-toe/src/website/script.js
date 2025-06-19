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

        let val1 = img1 ? img1.src : null;
        let val2 = img2 ? img2.src : null;
        let val3 = img3 ? img3.src : null;
        // checks if <img> exists, take src else null

        if (val1 !== null && val2 !== null && val3 !== null && val1 === val2 && val2 === val3) {
            hasWin = true
            gameOver = true

            let winner = val1 === bomb ? "O" : "X"
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

const showWinner = (winner) =>{
    msg.innerHTML = `${winner} wins!`
        msgCon.classList.remove("hide")
}
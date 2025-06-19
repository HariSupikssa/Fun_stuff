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


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.dataset.clicked === "true" || gameOver) return

        box.dataset.clicked = "true"

        const img = document.createElement('img')
        let source = turnO? bomb: sword
        img.src = source
        img.style.width = "95%"
        img.style.height = "95%"

        box.appendChild(img)

        turnO = !turnO
        moveCount++
    })
})
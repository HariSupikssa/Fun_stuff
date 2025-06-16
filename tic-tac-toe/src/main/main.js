// console.log("Hello, World!")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 500,
    })
    win.loadFile('../website/index.html')
}

app.whenReady().then(() => {
    createWindow()
})
// console.log("Hello, World!")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 550,
        height: 600,
        resizable: false,
        frame: false,
    })

    win.loadFile('../website/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0)
            createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform != "darwin") {
        app.quit()
    }
})
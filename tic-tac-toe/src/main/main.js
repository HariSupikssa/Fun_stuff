// console.log("Hello, World!")
const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 600,
        resizable: false,
        frame: false,
        webPreferences:
        {
            nodeIntegration: true,
            contextIsolation: false,
            // devTools: true,

        }
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

ipcMain.on('closeApp', () => {
    app.quit()
})
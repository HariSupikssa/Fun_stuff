// console.log("Hello, World!")
const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 600,
        resizable: false,
        frame: false,
        icon: path.join(__dirname,'./resources/app-icon.ico'),
        webPreferences:
        {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,

        }
    })

    // win.loadFile('../website/index.html')
    win.loadFile(path.join(__dirname, '..', 'website', 'index.html'));
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
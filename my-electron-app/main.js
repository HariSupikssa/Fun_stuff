const { app, BrowserWindow } = require('electron')


const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        // // Showing the window gracefully
        // show: false,

        // titleBarStyle: 'hidden',
        // resizable: false,
        // alwaysOnTop: true,
        // frame: false,

        // titleBarStyle: 'hidden',
        // titleBarOverlay: {color: '#fbadd1', symbolColor: '#faffad'},

        // icon: 'assets/exit.png', 
        // opacity: 0.7, 1=? fully opaque
        // visualEffectState: 'inactive', What is this for?
        width: 500,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname, 'preload.js')
        }

    })

    // const win = new BrowserWindow({
    //     titleBarStyle : 'hidden',
    //     titleBarOverlay : true,
    // })
    // win.setWindowButtonVisibility(true); 
    win.loadFile('index.html')
    //     setTimeout(() => {
    //     win.loadFile('index.html');
    //   }, 5000);

    // // Showing the window gracefully
    // win.loadFile('index.html')
    // win.once('ready-to-show',()=>{
    //         win.show();
    //     })
    // win.loadURL('https://soundcloud.com/adelynnxx/ounder-the-influence-x-i-was-6');

}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.quit();
})

// On macOS, apps remain alive/active in the Dock(like TaskBar in Windows) even after all windows are closed.
// This handler listens for the app being reactivated.
// When the app icon in the Dock is clicked, Electron creates a new window if none are open.

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
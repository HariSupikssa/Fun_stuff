const { app, BrowserWindow, ipcMain } = require('electron')


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
        width: 370,
        height: 475,
        resizable: false,
        frame: false,
        icon: path.join(__dirname, 'assets/strawberry.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            // preload: path.join(__dirname, 'preload.js') since context isolation is set to false
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

ipcMain.on('closeApp', () => {
    console.log("Close app received");
    app.quit();
});

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin')
        app.quit();
})

// On macOS, apps remain alive/active i n the Dock(like TaskBar in Windows) even after all windows are closed.
// This handler listens for the app being reactivated.
// When the app icon in the Dock is clicked, Electron creates a new window if none are open.

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})


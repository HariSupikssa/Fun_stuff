const { app, BrowserWindow } = require('electron')

const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        // // Showing the window gracefully
        // show: false,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
       
    })
     
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
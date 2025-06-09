const { ipcRenderer } = require('electron')

document.querySelector('#closeBtn').addEventListener('click', () => {
    console.log("Close button clicked");
    ipcRenderer.send('closeApp')
})
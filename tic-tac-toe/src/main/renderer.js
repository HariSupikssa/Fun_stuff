const { ipcRenderer } = require("electron")
document.querySelector('#closeBtn').addEventListener('click', () => {
    ipcRenderer.send('closeApp')
})
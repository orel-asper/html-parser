const { app, BrowserWindow } = require('electron')

const server = require('./config')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL('http://localhost:3000')
}

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// Open a window if none are open (macOS)
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) server(); createWindow();
    })
})
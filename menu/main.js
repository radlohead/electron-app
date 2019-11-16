const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname)

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 1920, height: 1080 })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})

const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let window

function createWindow()
{
    window = new BrowserWindow({width: 800, height: 600, frame: false, webPreferences: {contextIsolation: true, preload: path.join(app.getAppPath(), 'public\\preload.js')}})
    window.loadFile(path.join(app.getAppPath(), 'public\\index.html'))
}

app.on('ready', () =>
{
    app.allowRendererProcessReuse = true
    createWindow()
})

ipcMain.on("minimize", () =>
{
    window.minimize()
})
ipcMain.on("maximize", () =>
{
    window.maximize()
})
ipcMain.on("unmaximize", () =>
{
    window.unmaximize()
})
ipcMain.on("close", () =>
{
    window.close()
})
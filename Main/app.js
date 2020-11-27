const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    maxHeight:1000,
    maxWidth:600,
    minHeight:1000,
    minWidth:600,
    frame:false,
    transparent:true,
    icon:"Renderer/images/icon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('Renderer/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
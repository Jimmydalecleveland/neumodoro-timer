const { app, BrowserWindow, Menu } = require('electron')

Menu.setApplicationMenu(null)

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 680,
    icon: './src/assets/tomato-icon.png',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile('./dist/index.html')

  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

// Quit when all windows are closed, except on OS X
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

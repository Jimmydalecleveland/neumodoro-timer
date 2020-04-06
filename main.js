if (require('electron-squirrel-startup')) return
const { app, BrowserWindow, Menu } = require('electron')

// SQUIRREL BOILERPLATE
// this should be placed at top of main.js to handle setup events quickly
// if (handleSquirrelEvent()) {
//   // squirrel event handled and app will exit in 1000ms, so don't do anything else
//   return;
// }


Menu.setApplicationMenu(null)

function createWindow() {
  const win = new BrowserWindow({
    title: 'Neumodoro Timer',
    width: 420,
    height: 680,
    icon: __dirname + '/src/assets/icon',
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#d4dfee',
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

// SQUIRREL BOILERPLATE
// function handleSquirrelEvent() {
//   if (process.argv.length === 1) {
//     return false;
//   }

//   const ChildProcess = require('child_process');
//   const path = require('path');

//   const appFolder = path.resolve(process.execPath, '..');
//   const rootAtomFolder = path.resolve(appFolder, '..');
//   const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
//   const exeName = path.basename(process.execPath);

//   const spawn = function(command, args) {
//     let spawnedProcess, error;

//     try {
//       spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
//     } catch (error) {}

//     return spawnedProcess;
//   };

//   const spawnUpdate = function(args) {
//     return spawn(updateDotExe, args);
//   };

//   const squirrelEvent = process.argv[1];
//   switch (squirrelEvent) {
//     case '--squirrel-install':
//     case '--squirrel-updated':
//       // Optionally do things such as:
//       // - Add your .exe to the PATH
//       // - Write to the registry for things like file associations and
//       //   explorer context menus

//       // Install desktop and start menu shortcuts
//       spawnUpdate(['--createShortcut', exeName]);

//       setTimeout(app.quit, 1000);
//       return true;

//     case '--squirrel-uninstall':
//       // Undo anything you did in the --squirrel-install and
//       // --squirrel-updated handlers

//       // Remove desktop and start menu shortcuts
//       spawnUpdate(['--removeShortcut', exeName]);

//       setTimeout(app.quit, 1000);
//       return true;

//     case '--squirrel-obsolete':
//       // This is called on the outgoing version of your app before
//       // we update to the new version - it's the opposite of
//       // --squirrel-updated

//       app.quit();
//       return true;
//   }
// };

const electronInstaller = require('electron-winstaller')

async function buildWinInstaller() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: './build/Neumodoro Timer-win32-x64',
      outputDirectory: './build/installers',
      authors: 'Jimmy and Laura Cleveland',
      exe: 'Neumodoro Timer.exe',
      icon: './src/assets/icon.ico',
    })
    console.log('Successfully built windows installer')
  } catch (e) {
    console.error(`windows installer build failed: ${e.message}`)
  }
}

buildWinInstaller()

const electronInstaller = require('electron-winstaller');

async function buildWinInstaller() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: './build/neumodoro-win32-x64',
      outputDirectory: './build/installers',
      authors: 'Jimmy and Laura Cleveland',
      exe: 'neumodoro.exe'
    });
    console.log('Successfully built windows installer');
  } catch (e) {
    console.error(`windows installer build failed: ${e.message}`);
  }
}

buildWinInstaller()
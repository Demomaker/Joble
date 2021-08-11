const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

function createWindow () {
    // Create the browser window.
    let mainWin = new BrowserWindow({
      resizable: false,
      height: 720,
      width: 1280,
      webPreferences: {
        nodeIntegration: true
      }
    })
    // and load the index.html of the app.
    mainWin.loadFile('index.html');
    mainWin.webContents.openDevTools();
  }
  
  app.whenReady().then(createWindow)

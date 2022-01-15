const { Menu } = require('electron');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow () {
    // Create the browser window.
    let mainWin = new BrowserWindow({
      resizable: false,
      width: 1280,
      height: 720,
      webPreferences: {
        nodeIntegration: true
      }
    })
    // and load the index.html of the app.
    mainWin.loadFile('index.html');
    mainWin.webContents.openDevTools();
    Menu.setApplicationMenu(null);
  }

  app.whenReady().then(createWindow)

  
const menuTemplate = require('./projectJS/menuTemplate.js');
const { Menu } = require('electron');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const menu = Menu.buildFromTemplate(menuTemplate);

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
    Menu.setApplicationMenu(null);
  }

  app.whenReady().then(createWindow)

  
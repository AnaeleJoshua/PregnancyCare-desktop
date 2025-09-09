const {app,Menu,ipcMain} = require('electron')
const menu = require('./menu')
const {loadView} = require('./util')
const path = require("path");
const {createOrGetMainWindow} = require('./app')

let server;

app.whenReady().then(() => {
  Menu.setApplicationMenu(menu);
  loadView("/index.html");
});
ipcMain.on('navigate-back', () => {
  const mainWindow = createOrGetMainWindow()
  if (mainWindow.webContents.canGoBack()) {
    mainWindow.webContents.goBack();
  }
});

ipcMain.on('navigate-home', () => {
  const mainWindow = createOrGetMainWindow()
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  console.log(path.join(__dirname, '../renderer/index.html'))
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
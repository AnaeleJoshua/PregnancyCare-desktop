const { BrowserWindow} = require('electron');
const path = require('path');
// const menu = require('./menu');
// const {loadView } = require('./util')
let mainWindow=null;

function createOrGetMainWindow() {
  if (mainWindow && !mainWindow.isDestroyed()) {
    return mainWindow;
  }
  mainWindow = new BrowserWindow({
    title: "Pregnancy Care",
    width: 1000,
    height: 800,
    icon: path.join(__dirname, '../renderer/images/icon.png'),
    webPreferences: {
      nodeIntegration: false,
        contextIsolation: true, // Enable isolation
      preload: path.join(__dirname, 'preload.js')
    }
  });

 mainWindow.on('closed', () => { mainWindow = null; });
  return mainWindow;
}



module.exports = {
  createOrGetMainWindow,

};

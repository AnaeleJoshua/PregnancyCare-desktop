const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const menu = require('./menu');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Expert System",
    width: 1000,
    height: 800,
    icon: path.join(__dirname, '../renderer/images/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Use this if loading a local HTML file:
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
// mainWindow.setMenu(null);

  // Use this if running local server:
  // mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(menu);
  createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

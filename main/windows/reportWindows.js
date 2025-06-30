const { BrowserWindow } = require('electron');
const path = require('path');

function createReportWindow(title, filePath) {
  const win = new BrowserWindow({
    title,
    width: 800,
    height: 600,
    icon: path.join(__dirname, '../../renderer/images/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile(path.join(__dirname, '../../renderer', filePath));
}

module.exports = {
  createReportWindow: () => createReportWindow("New Report", "../../renderer/create/create.html"),
  
};

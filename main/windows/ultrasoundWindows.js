const { BrowserWindow } = require('electron');
const path = require('path');


function createultrasoundWindow(title, filePath) {
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
  createUltrasoundWindow: () => createultrasoundWindow("New Ultrasound", "../../renderer/create/create.html"),
  deleteUltrasoundWindow: () => createultrasoundWindow("Delete Ultrasound", "../../renderer/delete/delpatient.html"),
  updateUltrasoundWindow: () => createultrasoundWindow("Update Ultrasound", "../../renderer/update/update.html"),
  createViewUltrasoundWindow: () => createultrasoundWindow("View Ultrasound", "../../renderer/view_forms/view.html"),
  
};

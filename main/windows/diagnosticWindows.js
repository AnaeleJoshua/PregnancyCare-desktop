const { BrowserWindow } = require('electron');
const path = require('path');

function createDiagnosticWindow(title, filePath) {
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
  createDiagnosisWindow: () => createDiagnosticWindow("New Diagnosis", "../../renderer/create/create.html"),
  deleteDiagnosisWindow: () => createDiagnosticWindow("Delete Diagnosis", "../../renderer/delete/delpatient.html"),
  updateDiagnosisWindow: () => createDiagnosticWindow("Update Diagnosis", "../../renderer/update/update.html"),
  createViewDiagnosisWindow: () => createDiagnosticWindow("View Diagnosis", "../../renderer/view_forms/view.html"),
  
};

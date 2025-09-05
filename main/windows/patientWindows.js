const { BrowserWindow } = require('electron');
const path = require('path');

function createPatientWindow(title, filePath) {
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
  createNewPatientsWindow: () => createPatientWindow("New Patient", "create/create.html"),
  createDelPatientWindow: () => createPatientWindow("Delete Patient", "delete/delpatient.html"),
  createUpdatePatientWindow: () => createPatientWindow("Update Patient", "update/update.html"),
  createViewPatientWindow: () => createPatientWindow("View Patient", "view_forms/view.html"),
  createViewAllPatientWindow: () => createPatientWindow("View All Patient", "view_forms/viewAll.html")
};

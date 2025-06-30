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
  createPatientsWindow: () => createPatientWindow("New Patient", "../../renderer/create/create.html"),
  createDelPatientWindow: () => createPatientWindow("Delete Patient", "../../renderer/delete/delpatient.html"),
  createUpdatePatientWindow: () => createPatientWindow("Update Patient", "../../renderer/update/update.html"),
  createViewPatientWindow: () => createPatientWindow("View Patient", "../../renderer/view_forms/view.html"),
  createViewAllPatientWindow: () => createPatientWindow("View All Patient", "../../renderer/view_forms/viewAll.html")
};

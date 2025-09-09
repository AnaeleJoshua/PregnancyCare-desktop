const { Menu, shell, app } = require('electron');
const isMac = process.platform === 'darwin';
const { loadView } = require('./util');



const fileSubmenu = [
  {
    label: 'New Patient',
    click: () => loadView('create/create.html')
  },
  {
    label: 'Generate Report',
    click: () => loadView('create/report.html')
  },
  { type: 'separator' },
  isMac ? { role: 'close' } : { role: 'quit' }
];

const template = [
  // macOS app name menu
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),

  // File Menu
  {
    label: 'File',
    submenu: fileSubmenu
  },
  
  // Edit Menu
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
      ] : [
        { role: 'delete' },
        { role: 'selectAll' },
      ])
    ]
  },

  // View Menu
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },

  // Data Entry Menu
  {
    label: 'Data Entry',
    submenu: [
      { label: 'New Patient', click: () => loadView('create/create.html') },
      { label: 'Diagnosis', click: () => loadView('create/diagnosis.html') },
      { label: 'Ultrasound', click: () => loadView('create/ultrasound.html') }
    ]
  },

  // Records Management Menu
  {
    label: 'Manage Records',
    submenu: [
      {
        label: 'Patient',
        submenu: [
          { label: 'Update Patient', click: () => loadView('update/patient.html') },
          { label: 'Delete Patient', click: () => loadView('delete/delpatient.html') },
          { label: 'View Patient', click: () => loadView('view_forms/view.html') },
          { label: 'View All Patients', click: () => loadView('view_forms/viewAll.html') }
        ]
      },
      {
        label: 'Diagnosis',
        submenu: [
          { label: 'Create Diagnosis', click: () => loadView('create/diagnosis.html') },
          { label: 'Update Diagnosis', click: () => loadView('update/diagnosis.html') },
          { label: 'View Diagnosis', click: () => loadView('view_forms/view-diagnosis.html') },
          { label: 'Delete Diagnosis', click: () => loadView('delete/del-diagnosis.html') }

        ]
      },
      {
        label: 'Ultrasound',
        submenu: [
          { label: 'Create Ultrasound', click: () => loadView('create/ultrasound.html') },
          { label: 'Update Ultrasound', click: () => loadView('update/ultrasound.html') },
          { label: 'View Ultrasound', click: () => loadView('view_forms/view-ultrasound.html') },
          { label: 'Delete Ultrasound', click: () => loadView('delete/del-ultrasound.html') }
        ]
      }
    ]
  },

  // Window Menu
  {
    label: 'Window',
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }

      ] : [
        { role: 'close' }
      ])
    ]
  },

  // Help Menu
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          try {
            await shell.openExternal('https://electronjs.org');
          } catch (err) {
            console.error("🚨 Failed to open external link (ElectronJS):", err);
          }
        }
      },
      {
        label: 'Documentation',
        click: async () => {
          try {
            await shell.openExternal('https://www.electronjs.org/docs');
          } catch (err) {
            console.error("🚨 Failed to open external link (Docs):", err);
          }
        }
      },
      {
        label: 'Report an Issue',
        click: async () => {
          try {
            await shell.openExternal('https://github.com/your-repo/issues');
          } catch (err) {
            console.error("🚨 Failed to open external link (GitHub Issues):", err);
          }
        }
      }
    ]
  }
];


// IMPORTANT: Ensure this code is executed after Electron's app is ready.
// The best practice is to wrap your menu setup within app.whenReady(). For example:
//
// app.whenReady().then(() => {
//   try {
//     const menu = Menu.buildFromTemplate(template);
//     Menu.setApplicationMenu(menu);
//   } catch (error) {
//     console.error("🚨 Invalid Menu Template (during app.whenReady):", error.message);
//     console.dir(template, { depth: null });
//   }
// });
//
// If your existing main process file (e.g., main/app.js) doesn't already use
// app.whenReady(), consider adding it for more robust application initialization.

try {
  module.exports = Menu.buildFromTemplate(template);
} catch (error) {
  console.error("🚨 Invalid Menu Template:", error.message);
  console.dir(template, { depth: null });
  module.exports = null; // prevent crash
}

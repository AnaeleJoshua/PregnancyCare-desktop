const { Menu, shell, app } = require('electron');
const isMac = process.platform === 'darwin';

// Import your custom window functions
// Added try-catch around imports to catch potential module loading issues
let patientWindows = {};
let diagnosticWindows = {};
let ultrasoundWindows = {};
let reportWindows = {};

try {
  patientWindows = require('./windows/patientWindows');
  diagnosticWindows = require('./windows/diagnosticWindows');
  ultrasoundWindows = require('./windows/ultrasoundWindows');
  reportWindows = require('./windows/reportWindows');
} catch (importError) {
  console.error("🚨 Error loading window modules:", importError.message);
  // Assign empty objects to prevent undefined references if import fails
  patientWindows = {};
  diagnosticWindows = {};
  ultrasoundWindows = {};
  reportWindows = {};
}

// Destructure functions safely after potential import errors
const {
  createPatientsWindow,
  createUpdatePatientWindow,
  createDelPatientWindow,
  createViewPatientWindow,
  createViewAllPatientWindow
} = patientWindows;

const {
  createDiagnosisWindow,
  updateDiagnosisWindow,
  deleteDiagnosisWindow,
  createViewDiagnosisWindow
} = diagnosticWindows;

const {
  createUltrasoundWindow,
  updateUltrasoundWindow,
  deleteUltrasoundWindow,
  createViewUltrasoundWindow
} = ultrasoundWindows;

const { createReportWindow } = reportWindows;


// Helper function to safely assign click handlers
// This prevents 'TypeError: Invalid menu' if a function is undefined
const safeClick = (fn, name) => {
  if (typeof fn === 'function') {
    return fn;
  } else {
    console.warn(`🚨 Menu item click handler "${name}" is not a function or is undefined. Using a no-op function.`);
    return () => {
      // You could add a modal or log here for the user if needed
      console.error(`Attempted to click unavailable function: ${name}. Please check the corresponding window module.`);
    };
  }
};

const fileSubmenu = [
  {
    label: 'New Patient',
    click: safeClick(createPatientsWindow, 'createPatientsWindow')
  },
  {
    label: 'Generate Report',
    click: safeClick(createReportWindow, 'createReportWindow')
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
      { label: 'New Patient', click: safeClick(createPatientsWindow, 'createPatientsWindow') },
      { label: 'Diagnosis', click: safeClick(createDiagnosisWindow, 'createDiagnosisWindow') },
      { label: 'Ultrasound', click: safeClick(createUltrasoundWindow, 'createUltrasoundWindow') }
    ]
  },

  // Records Management Menu
  {
    label: 'Manage Records',
    submenu: [
      {
        label: 'Patient',
        submenu: [
          { label: 'Update Patient', click: safeClick(createUpdatePatientWindow, 'createUpdatePatientWindow') },
          { label: 'Delete Patient', click: safeClick(createDelPatientWindow, 'createDelPatientWindow') },
          { label: 'View Patient', click: safeClick(createViewPatientWindow, 'createViewPatientWindow') },
          { label: 'View All Patients', click: safeClick(createViewAllPatientWindow, 'createViewAllPatientWindow') }
        ]
      },
      {
        label: 'Diagnosis',
        submenu: [
          { label: 'Create Diagnosis', click: safeClick(createDiagnosisWindow, 'createDiagnosisWindow') },
         { label: 'Update Diagnosis', click: safeClick(updateDiagnosisWindow, 'updateDiagnosisWindow') },
        { label: 'View Diagnosis', click: safeClick(createViewDiagnosisWindow, 'createViewDiagnosisWindow') },
        { label: 'Delete Diagnosis', click: safeClick(deleteDiagnosisWindow, 'deleteDiagnosisWindow') }

        ]
      },
      {
        label: 'Ultrasound',
        submenu: [
          { label: 'Create Ultrasound', click: safeClick(createUltrasoundWindow, 'createUltrasoundWindow') },
          { label: 'Update Ultrasound', click: safeClick(updateUltrasoundWindow, 'updateUltrasoundWindow') },
          { label: 'View Ultrasound', click: safeClick(createViewUltrasoundWindow, 'createViewUltrasoundWindow') },
          { label: 'Delete Ultrasound', click: safeClick(deleteUltrasoundWindow, 'deleteUltrasoundWindow') }
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

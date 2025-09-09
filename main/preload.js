const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  navigateBack: () => ipcRenderer.send('navigate-back'),
  navigateHome: () => ipcRenderer.send('navigate-home')
});

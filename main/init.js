const {app,Menu} = require('electron')
const menu = require('./menu')
const {loadView} = require('./util')
const {spawn} = require("child_process");

let server;
const { ipcMain } = require('electron');


ipcMain.on('go-home', () => {
  loadView('/index.html');
});

// app.whenReady().then(()=>{
//     server = spawn('node', [serverPath])
//     server.stdout.on('data', (data)=>{
//     console.log(`server stdout: ${data}`)
//   })
//   server.on("close", (code)=>{
//     console.log(`server process exited with code ${code}`)
//   })
//   Menu.setApplicationMenu(menu);
//   loadView("index.html");
// })

// app.on("quit", ()=>{
//   server.kill();
// })
app.whenReady().then(() => {
  Menu.setApplicationMenu(menu);
  loadView("/index.html");
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
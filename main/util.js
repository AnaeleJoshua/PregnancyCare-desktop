const {createOrGetMainWindow} = require('./app')
const path = require("path")

function loadView(filePath) {
  const win = createOrGetMainWindow();
  console.log(`loading`,path.join(__dirname, '../renderer',filePath))
  win.loadFile(path.join(__dirname, '../renderer', filePath));
  win.show();
  // return win;
}
module.exports = {loadView}
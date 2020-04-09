const path = require('path');

const appDir = path.dirname(require.main.filename);

module.exports = {
  appDir,
  feedDir: `${appDir}/feed`,
  outputImageDir: `${appDir}/images`,
  outputFilePath: `${appDir}/output.pdf`,
  perPages: 10,
};

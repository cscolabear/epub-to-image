const path = require('path');
const Convert = require('ebook-convert');
const {
  pdfToImage
} = require('./src/pdfToImage');
const chalk = require('chalk');
const constant = require('./src/constant');
const {
  getFileNameByArgument
} = require('./src/argument');
const helper = require('./src/helper');


const fileName = getFileNameByArgument();
let targetFilePath = path.join(constant.appDir, fileName);

if (!helper.isFileExists(targetFilePath)) {
  return console.log(chalk.red(`can't find ${targetFilePath}`));
}

const fileExtension = helper.getFileExtension(targetFilePath);
if (!fileExtension) {
  return console.log(chalk.red(`missing file extension`));
}

console.log(chalk.underline.white('Ready to Process'));
console.log(chalk.green(`\t target file path: ${targetFilePath}`));

const options = {
  input: targetFilePath, //path to epub
  output: constant.outputFilePath,
  // insertBlankLine: false,
  // insertBlankLineSize: '1',
  // lineHeight: '12',
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0',
  marginLeft: '0',
};

if ('epub' === fileExtension) {
  Convert(options, function (err) {
    if (err) console.log(err);

    pdfToImage(constant.outputFilePath);
  });
} else {
  console.log(chalk.underline.white('skip epub to pdf...'));
  pdfToImage(fileName);
}

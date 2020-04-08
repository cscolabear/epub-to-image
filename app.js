const path = require('path');
const Convert = require('ebook-convert');
const PDF2Pic = require("pdf2pic");
const appDir = path.dirname(require.main.filename);
const colors = require('colors');
const fs = require('fs');


const argument = process.argv.slice(2);
let filename;
if (argument.length <= 0) {
  console.log('plz input epub filename. e.g. node app.js example.epub'.red);
  return;
} else {
    filename = argument.pop()
}
console.log(`ipnut epub file name: "${filename}"`.green);

if (!fs.existsSync(`${appDir}/${filename}`)) {
  console.log(`can't find ${appDir}/${filename}`.red);
  return;
}

const fileExtension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
if (!fileExtension) {
  console.log('missing file extension'.red);
  return;
}

console.log('Ready to Process');

const options = {
  input: `${appDir}/${filename}`, //path to epub
  output: `${appDir}/output.pdf`, //path to pdf
  // insertBlankLine: false,
  // insertBlankLineSize: '1',
  // lineHeight: '12',
  marginTop: '-1',
  marginRight: '-1',
  marginBottom: '-1',
  marginLeft: '-1',
};


const pdfToImage = (parsePdfPath) => {
  // const pages = [] || -1;
  const pages = -1; // all

  const pdf2pic = new PDF2Pic({
    density: 100,           // output pixels per inch
    savename: "untitled",   // output file name
    savedir: "./images",    // output file location
    format: "png",          // output file format
    // size: "1280x1280"         // output size in pixels
    size: "1920x1920",
  });

  pdf2pic.convertBulk(parsePdfPath, pages).then((resolve) => {
    console.log("image converter successfully!");

    return resolve;
  });
}

if ('epub' === fileExtension) {
  Convert(options, function (err) {
    if (err) console.log(err);

    pdfToImage('output.pdf');
  });
} else {
  console.log('skip epub to pdf');
  pdfToImage(filename);
}

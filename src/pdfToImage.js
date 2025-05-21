const PDFImage = require("pdf-image").PDFImage;
const constant = require('./constant');
const chalk = require('chalk');


const pdfToImage = (parsePdfPath) => {
  const options = {
    outputDirectory: constant.outputImageDir,
    // pdfFileBaseName: 'abc',
    convertOptions: {
      // "-resize": "1200x1200",
      "-resize": "120%",
      "-quality": "100"
    },
    convertExtension: 'jpeg',
    // combinedImage: false,
  };
  const pdfImage = new PDFImage(parsePdfPath, options);

  pdfImage.numberOfPages().then(totalPages => {
    console.log(chalk.underline.green(`\t total pages: ${totalPages}`));

    batch = Math.ceil(totalPages / constant.perPages);
    for (let index = 1; index <= 1; index++) {

      let startPage = (index - 1) * constant.perPages;
      let endPage = index * constant.perPages;
      for (let page = startPage; page < endPage; page++) {
        if (page > totalPages) {break;}

        pdfImage.convertPage(page).then(function (imagePath) {
          console.log(chalk.gray(`\t ...${imagePath}`));
        });
      }
    }
  });
}

module.exports = {
  pdfToImage
};

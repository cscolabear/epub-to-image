const PDFImage = require("pdf-image").PDFImage;
const constant = require('./constant');


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
    console.log(`\t total pages: ${totalPages}`.underline.green);

    batch = Math.ceil(totalPages / constant.perPages);
    for (let index = 1; index <= 1; index++) {

      let startPage = (index - 1) * constant.perPages;
      let endPage = index * constant.perPages;
      for (let page = startPage; page < endPage; page++) {
        if (page > totalPages) {break;}

        pdfImage.convertPage(page).then(function (imagePath) {
          console.log(`\t ...${imagePath}`.gray);
        });
      }
    }
  });
}

module.exports = {
  pdfToImage
};

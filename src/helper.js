const fs = require('fs');

const isFileExists = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true;
    }
  } catch (err) {
    console.error(err)
  }
  return false;
};

const getFileExtension = filePath => {
  // https://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
  const fileExtension = filePath.slice((filePath.lastIndexOf(".") - 1 >>> 0) + 2);
  if (!fileExtension) {
    return console.error('missing file extension');
  }

  return fileExtension;
}

module.exports = {
  isFileExists, getFileExtension
};

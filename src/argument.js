const getFileNameByArgument = () => {
  const argument = process.argv.slice(2);
  if (argument.length <= 0) {
    return false;
  }

  return argument.shift() || false;
}

module.exports = {
  getFileNameByArgument
};

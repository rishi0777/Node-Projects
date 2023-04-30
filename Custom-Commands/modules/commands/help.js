const showHelp = () => {
  console.log(`List of valid commands:
    1. node main.js tree "directoryPath"
    2. node main.js organize "directoryPath"
    3. node main.js help
NOTE: If directory path is not given then it will use current working directory for the operation\n`);
};

module.exports = { help: showHelp };

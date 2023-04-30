const path = require("path");
const fs = require("fs");
const utility = require("../utility");

const organizeFiles = (srcPath) => {
  if (utility.validateDirPath(srcPath)) {
    for (let content of fs.readdirSync(srcPath)) {
      const fileOrDir = path.join(srcPath, content);
      if (fs.lstatSync(fileOrDir).isFile()) {
        const category = getCategory(fileOrDir);
        const categoryPath = path.join(srcPath, category);
        copyFiles(fileOrDir, categoryPath, category);
        console.log("DONE!");
      }
    }
  }
};

const getCategory = (file) => {
  const extension = path.extname(file).toLowerCase();
  for (let category in utility.fileTypes) {
    for (let ext of utility.fileTypes[category]) {
      if (ext === extension) return category;
    }
  }
  return "Others";
};

const copyFiles = (srcFilePath, categoryPath, category) => {
  if (fs.existsSync(categoryPath) === false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath, fileName);
  console.log("Copying", fileName, "to", category, "...");
  fs.copyFileSync(srcFilePath, destFilePath);
  fs.unlinkSync(srcFilePath);
};
module.exports = { organize: organizeFiles };

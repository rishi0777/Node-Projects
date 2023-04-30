const fs = require("fs");

const validatePath = (currentPath) => {
  if (fs.existsSync(currentPath)) {
    return true;
  } else {
    console.log("Path is not valid");
    return false;
  }
};

const validateDirPath = (dirPath) => {
  if (validatePath(dirPath)) {
    const fileOrDir = fs.lstatSync(dirPath);
    if (fileOrDir.isFile()) {
      console.log(
        "Given path points to file. Path must point to valid directory"
      );
      return false;
    } else return true;
  }
};

const fileTypes = {
  Images: [
    ".raw",
    ".cr2",
    ".nef",
    ".orf",
    ".sr2",
    ".eps",
    ".png",
    ".jpg",
    ".jpeg",
    ".bmp",
    ".tif",
    ".tiff",
    ".webp",
  ],
  Videos: [
    ".mkv",
    ".flv",
    ".webm",
    ".avi",
    ".mts",
    ".m2ts",
    ".ts",
    ".wmv",
    ".mov",
    ".qt",
    ".mp4",
    ".m4p",
    ".m4v",
    ".mpg",
    ".mp2",
    ".mpeg",
    ".mpe",
    ".mpv",
    ".m2v",
    ".3gp",
  ],
  Archives: [".zip", ".7z", ".rar", ".tar", ".gz", ".ar", ".iso", ".xz"],
  Documents: [
    ".docx",
    ".doc",
    ".pdf",
    ".xlsx",
    ".xls",
    ".odt",
    ".odp",
    ".odg",
    ".odf",
    ".txt",
    ".ps",
    ".txt",
  ],
  Softwares: [".exe", ".dmg", ".pkg", ".deb"],
  Subtitles: [".srt"],
};

module.exports = {
  validatePath: validatePath,
  validateDirPath: validateDirPath,
  fileTypes: fileTypes,
};

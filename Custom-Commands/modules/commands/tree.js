const utility = require("../utility");
const path = require("path");
const fs = require("fs");

const showTree = (currentPath, indent) => {
  if (utility.validatePath(currentPath)) {
    for (let child of fs.readdirSync(currentPath)) {
      const childAddress = path.join(currentPath, child);
      if (fs.lstatSync(childAddress).isFile()) {
        console.log(indent, "├──", path.basename(childAddress));
      } else {
        console.log(indent, "└──" + path.basename(childAddress));
        showTree(childAddress, indent + "\t");
      }
    }
  }
};

module.exports = { tree: showTree };

#!/usr/bin/env node
//import custom modules
const helpObj = require("./modules/commands/help");
const organizeObj = require("./modules/commands/organize");
const treeObj = require("./modules/commands/tree");

const command = process.argv[2];
const dirPath = process.argv[3] || process.cwd();

switch (command) {
  case "tree":
    treeObj.tree(dirPath, "");
    break;
  case "organize":
    organizeObj.organize(dirPath);
    break;
  case "help":
    helpObj.help();
    break;
  default:
    console.log("Command not valid.");
    helpObj.help();
}

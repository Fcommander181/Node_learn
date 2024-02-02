/* how to import our own made files

// to import people code to modules use require
const xyz = require("./people");
// you can't access the content of imported file directly  you should do it manually
// xyz is empty object untill you export manually the imported file
console.log(xyz.people, xyz.ages);

// to import multiple different thing from different file use this

const {
  people,
  ages /* this should contain same name as the imported file ,
} = require("./people"); // this import only people array from the file

// 
*/

// import built-in files (core modules)

const os = require("os");
console.log(os.platform(), os.homedir());

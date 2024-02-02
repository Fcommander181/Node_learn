const fs = require("fs");
// to create a ReadStream :
const readStream = fs.createReadStream(
  "./docs/blog3.txt",
  /*method two to convert the hexadecimal content of file to text*/ {
    encoding: "utf8",
  }
);
// to create writeStream :
const writeStream = fs.createWriteStream("./docs/blog4.txt");
// on is a eventlistener : every time we get new chunk of data the on method will run the function in the second parameter
// readStream.on("data", (chunk) => {
//   console.log("------ NEW CHUNK --------------------");
//   console.log(
//     chunk /*.toString() */ /* method one to get the text from file */
//   );
//   // to write on the file with the write stream
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// piping : to pass data directly from readStream to writeStream
readStream.pipe(writeStream); // equivalent to line 12 to 20

// search : duplex stream

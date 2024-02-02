/* the file system  (special feature you can't use it without node )*/

const fs = require("fs");

// reading files

/*
// readFile method is asynchronous (doesnt block our code while executing itself ) so it needs some time to do
fs.readFile(
  "./docs/blog1.txt",
  /* this function will fire(executed) when readFile is complete (
    err,
    data
  ) => {
    if (err) {
      console.log(err);
    }
    // data takes a buffer (a package of data sent to us when we read this file)
    // so you need to convert it to string to return the content of the file
    console.log(data.toString());
  }
);
// it execute first because the readFile method take some time to execute
console.log("last line");
*/

// writing files

/*
// writeFile is an asynchronous method same as readFile it needs some time to execute so you need a 3rd parameter as a function to run when the writeFile after executing the method
fs.writeFile(
  "./docs/blog2.txt" /*if the file don't exist so it will create it for you,
  "Hello Rayen ! umma is waiting you",
  () => {
    console.log("file was written");
  }
);
*/

// directories
// to check if the directory already exist (if it doesnt exist mkdir raise an error )
if (!fs.existsSync("./assets" /*the file or directory*/)) {
  //use mkdir to create a directory
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
      console.log("folder created");
    }
  });
} else {
  // to delete directories use rmdir
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
// deleting files

/*
/* use unlink to delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
*/

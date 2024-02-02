//in node we create a server manually
const http = require("http");
// to create a server (you don't have to store the command on a variable [const server]])
const server = http.createServer(
  /*this callback function gonna run every time a request comes in the server*/ (
    req /*object that store the url - type of request (get, post)*/,
    res /* is a object we use to send a response to the user */
  ) => {
    // we log a message whenever a request comes in
    console.log(req);
  }
);
//To make the server listen to requests we use listen
server.listen(
  3000 /* port number*/,
  "localhost" /* hostname  */,
  /* this function  execute when we start listening*/ () => {
    console.log("listening for requests on port 3000");
  }
);

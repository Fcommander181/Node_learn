//in node we create a server manually
const http = require("http");
const fs = require("fs");
const _ = require('lodash');
// to create a server (you don't have to store the command on a variable [const server]])
const server = http.createServer(
  /*this callback function gonna run every time a request comes in the server*/ (
    req /*object that store the url - type of request (get, post)*/,
    res /* is a object we use to send a response to the user */
  ) => {
    // we log a message whenever a request comes in
    console.log(req);
    //lodash
    /*
    const num = _.random(0,20);
    console.log(num);
    const greet = _.once/*will let the function run once only every callback will treat it like one(()=> {
      console.log('hello');
    }) 
    greet();
    greet();
    */
    // we log a message whenever a request comes in
    // "Request"
    //console.log(req.url/* path begins after localhost:3000*/ , req.method);
    /* 
    // "Response" : What we use to send a response to the browser
    // we need to formulate the response : to do that we need formulate header(give the browser a little bit information about the response like the type of response or set cookies...  ) 
    //1-set header content type
    res.setHeader("Content-Type" , "text/html");
    // 2-send data
    res.write("<h1>hello CatCommander!</h1> ");
    res.write("<p>Welcome to victory</p>");
    // 3-End the response
    res.end();
    */
   // returning html based on url (routing system)
    let path = "./views/";
    switch(req.url) {
      case '/' :
      path += "index.html";
      res.statusCode = 200;
      break;
      case "/about" :
      path += "about.html" ;
      res.statusCode = 200;
      break;
      // redirection
      case "/about-me" :
      res.setHeader("Location", '/about');
      res.statusCode = 301;
      res.end();
      break;
      default:
        path +="404.html";
        res.statusCode = 404;

        break;
          
    }
    /* Returning html Pages */
    // send Html FIle
    fs.readFile(path, (err,data) => {
      if(err) {
        console.log(err);
        res.end();
      }
      else {
        
        //res.write(data);
        // return a status code
        //res.statusCode = 200;
        // if we are going to return one things this is a quick method (put data in end method)
        res.end(data);
      }
    }); 
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

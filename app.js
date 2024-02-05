// 1- import express
const express = require('express');
// 2- set up express app
// usually people name this file and the express app as "app"
const app = express();




// 3- listen to requests
app.listen(3000);
//  4- respond to requests
app.get('/'/* url path */,(req,res) => {
    // send response
    // res.send('<p> home page </p>');/* it set the content type header and status code automatically (in most cases)*/ put a string in parameter
    res.sendFile('./views/index.html',{root: __dirname} /* set the relative path because the default path of sendFile is absolute*/);/* it set the content type header and status code automatically (in most cases)*/
});

app.get('/about'/* url path */,(req,res) => {
    // send response
    // res.send('<p> about page </p>');/* it set the content type header and status code automatically (in most cases)*/ put a string in parameter
    res.sendFile('./views/about.html',{root: __dirname} /* set the relative path because the default path of sendFile is absolute*/);/* it set the content type header and status code automatically (in most cases)*/
});

// redirects
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

// 404 page
app.use((req,res) => {
    res.status(404)/*this method return the res object itself but with the status setted*/.sendFile('./views/404.html' , {root : __dirname}); /* we need to set status to 404 because express doesnt know if this file was error or not  */
}); // use method callback a function  for every single request coming in but only when the request reaches this point in the code (like the default in switch) it should go in the bottom of the page

// express works in the way that if a request match with url and handlers (like get) it will send response and ignore the code after else it will match the next gets handlers and url 
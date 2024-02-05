// 1- import express
const express = require('express');
// 2- set up express app
// usually people name this file and the express app as "app"
const app = express();

// register view engine for this app
app.set('view engine' , 'ejs');/* we use it to configure some application settings */
// set the views to another folder (if we didnt do that the default is set to views folder)
//app.set('views','myviews');

// 3- listen to requests
app.listen(3000);
//  4- respond to requests
app.get('/'/* url path */,(req,res) => {
    const blogs = 
    {title : "yoshi finds eggs", snippet: 'lorem ipsum dodlor sit amet consecteur'},
    {title : "mario finds stars",snippet: 'lorem ipsum dodlor sit amet consecteur'},
    {title : "How to defeat broewser" eggs',snippet: 'lorem ipsum dodlor sit amet consecteur'}
    
    // send response
    // res.send('<p> home page </p>');/* it set the content type header and status code automatically (in most cases)*/ put a string in parameter
    //res.sendFile('./views/index.html',{root: __dirname} /* set the relative path because the default path of sendFile is absolute*/);/* it set the content type header and status code automatically (in most cases)*/
    res.render('index',/*to pass data from our handler to a view*/{ title : 'Home'}); // res.render generates HTML on the server and delivers it to the client.
});
    

app.get('/blogs/create' , (req,res) => {
    res.render('create', {title : 'Create a new Blog'});
});

app.get('/about'/* url path */,(req,res) => {
    // send response
    // res.send('<p> about page </p>');/* it set the content type header and status code automatically (in most cases)*/ put a string in parameter
    // res.sendFile('./views/about.html',{root: __dirname} /* set the relative path because the default path of sendFile is absolute*/);/* it set the content type header and status code automatically (in most cases)*/
    res.render('about' , {title : "About"}); // res.render generates HTML on the server and delivers it to the client.
});

// redirects
app.get('/about-us',(req,res) => {
    res.redirect('/about', {title : "About"});
});

// 404 page
app.use((req,res) => {
    //res.status(404)/*this method return the res object itself but with the status setted*/.sendFile('./views/404.html' , {root : __dirname}); /* we need to set status to 404 because express doesnt know if this file was error or not  */
   res.status(404).render('404',{title : 404});
}); // use method callback a function  for every single request coming in but only when the request reaches this point in the code (like the default in switch) it should go in the bottom of the page

// express works in the way that if a request match with url and handlers (like get) it will send response and ignore the code after else it will match the next gets handlers and url 
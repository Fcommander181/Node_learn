// connect to database and import related files and libraries
const mongoose = require('mongoose');
const blogRoutes = require("./routes/blogRoutes");
// make sure to change <user> and <password> with appropriate user in Mongo Db
const dbURI = 'mongodb+srv://<user>:<password>@cluster.m4j1ucc.mongodb.net/node_tuto';
mongoose.connect(dbURI)
.then(() => app.listen(3000))
.catch((err) => console.log(err));
// 1- import express
const express = require('express');
// 2- set up express app
// usually people name this file and the express app as "app"
const app = express();


// middleware & static files
// require a 3rd party middleware
app.use(express.static('public')); /* we are setting up out static files in a folder named public */
const morgan = require('morgan');/*middelware logger */
app.use(express.urlencoded({extended : true})); /* takes all the url encoded data and pass that into an object we can use on the request object */
// add a middleware
/* 
app.use((req,res,next) => {
    console.log('new request made');
    console.log('host: ',req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    next();
});*/
// after executing the middleware above , the browser still loading and keeps the old page that's because express doesn't know what to do next. 

// use 3rd party middleware

app.use(morgan('dev'));


/*
// mongoose and mongo sandbox routes
app.get('/add-blog', (req,res) => {
    const blog = new Blog({
        title : 'new blog 2',
        snippet : 'about new blog' , 
        body : 'more about my new blog'
    });
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/all-blogs', (req,res) => {
    Blog.find()
        .then((result) =>  {
            res.send(result);
        })
        .catch((err)=> {
            console.log(err);
        })
});

app.get('/single-blog',(req,res) => {
    Blog.findById('ID')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
        
    })
    */
// register view engine for this app
app.set('view engine' , 'ejs');/* we use it to configure some application settings */
// set the views to another folder (if we didnt do that the default is set to views folder)
//app.set('views','myviews');

// 3- listen to requests

//  4- respond to requests
app.get('/'/* url path */,(req,res) => {
    
    // send response
    // res.send('<p> home page </p>');/* it set the content type header and status code automatically (in most cases)*/ put a string in parameter
    //res.sendFile('./views/index.html',{root: __dirname} /* set the relative path because the default path of sendFile is absolute*/);/* it set the content type header and status code automatically (in most cases)*/
    //res.render('index',/*to pass data from our handler to a view*/{ title : 'Home' , blogs}); // res.render generates HTML on the server and delivers it to the client.
    res.redirect('/blogs');
});
    
// blog routes
app.use('/blogs',blogRoutes);



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



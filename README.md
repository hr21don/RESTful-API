# RESTful-API
A RESTful-API adhering to  REST architecture. 

## How does it work? 

REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example... 

* A REST API would use a GET request to retrieve a record,
* A POST request to create one, 
* A PUT request to update a record,
* And a DELETE request to delete one. 

All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.

## How to run? || Download the zip file to your downloads directory and extract it.

* Open up a terminal/cmd and change to the directory with app.js in it
* Run app.js locally using 'nodemon app.js' to start the server on localhost:3000.

## Useful Resources 

* https://ejs.co/
* https://nodejs.org/en/download/
* https://www.npmjs.com/package/nodemon 
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## Here is something to get you started on your RESTful journey!!! 

## Server Code

```
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

```
## Re-populate Database
```
{
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine tools & communication protocols used for building software."
}

{
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}

{
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
```


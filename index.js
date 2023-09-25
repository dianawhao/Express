/* express dependency*/
const express = require('express');
const ejs = require('ejs');
const app = express();

// set EJS as the "view engine"
// view engine = template engine
app.set("view engine", "ejs");

// ROUTES (a url fragment) => a JavaScript function
app.get("/", function(req,res){
    // req: request (what the client is sending over)
    // res: response (what you are going to send back to the client)
    res.render("index", {
        "yourName":"Jon Snow",
        "luckyNumber": Math.random() * 100


    }); // send back the content of index.ejs, assume the file in the view folder
});

// match hello/<anything>
// will match hello/paul or hello/daniel
app.get('/hello/:firstName', function(req,res){
    res.send("Hello " + req.params.firstName);
})

app.get("/about-us", function(req,res){
    res.send("About Us -- hello");
})

// start server
app.listen(8080, function(){
    console.log("Express server has started");
})
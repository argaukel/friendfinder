// var express = require("express");
var path = require("path");
// var api = require("./api");

var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({extend:true}));
//routes
// app.get("/", function(req, res){
//     res.send("app works"); 
// });

// this route serves api data

app.get("/apple", function(req, res){
    res.json({color:"red"});
});

app.post("/find-friend", function(req, res){
    console.log(req.body);
    res.send("works!")
});

// this route will serve up html page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html")); 
});

//turn server on and specify port
app.listen(3000)
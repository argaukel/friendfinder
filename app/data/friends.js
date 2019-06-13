var express = require("express");
var app = express();
//routes
app.get("/", function(req, res){
    res.send("app works");
})

//turn server on and specify port
app.listen(3000)
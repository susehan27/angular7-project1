//install express server
const express = require("express");
const path = require("path");

const app = express();

//serve only static files from dist directory
app.use(express.static(__dirname + "/dist/ng7"));

app.get("/*", function(req,res) {
    res.sendFile(path.join(__dirname + "/dist/ng7/index.html"));
});

//start the app by listening on default heroku port
app.listen(process.env.PORT || 8080);
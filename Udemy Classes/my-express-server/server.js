const express = require("express");
const app = express();

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
    res.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: g@gmail.com");
})

app.get("/about", function(req, res) {
    res.send("I'm brandan, and this is my about page that's pretty empty!");
});
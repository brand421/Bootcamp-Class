const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})


//new user signup
app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName
        }
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us**.api.mailchimp.com/3.0/lists/a******37/members";

    const options = {
        method: "POST",
        auth: "brandan1:045847**************366f78d9-us**"
    }

    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure", function(req, res) {
    res.redirect("/");
})


app.listen(3000, function(req, res) {
    console.log("Server is listening on port 3000");
})

//Mailchimp API Key: 04584***************f78d9-us**
// Audience ID: a3b5498937
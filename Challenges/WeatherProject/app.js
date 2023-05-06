const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?id=4994358&appid=b562f772c47ef48094d572cbef1a7b08&units=imperial";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const descr = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.write("<h2>The weather is currently " + descr + "</h2>");
            res.write("<h1>The temperature in Grand Rapids is " + temp + " degrees Fahrenheit." + icon + "</h1>");
            // res.write(icon);
            res.send();          
        });
    });
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})
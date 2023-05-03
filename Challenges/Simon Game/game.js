
var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
})

function nextSequence() {
    //randomly selects color and pushes to gamePattern
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //animates chosen color
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);  

    //plays audio to match selected color 
}

function playSound(name) {
    var gameAudio = new Audio("sounds/" + name + ".mp3");
    gameAudio.play();
}

var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown(function() {
    $("#level-title").text("Level " + level);
    while (level < 1 ) {
        nextSequence();
    }
})

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern[-1]);
})

function nextSequence() {

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);  
    level += 1;
    $("#level-title").text("Level " + level);
}

function playSound(name) {
    var gameAudio = new Audio("sounds/" + name + ".mp3");
    gameAudio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

function checkAnswer(currentLevel) {
    if(currentLevel === gamePattern[-1]) {
        console.log("success!");
        setTimeout(function() {
            nextSequence();
        }, 1000)
    } else {
        console.log("fail!");
    }
}
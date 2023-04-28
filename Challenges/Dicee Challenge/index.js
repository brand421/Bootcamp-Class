var randomNumber1 = Math.round(Math.random()*5)+1;
var randomNumber2 = Math.round(Math.random()*5)+1;
var imageSelector1 = "images/dice" + randomNumber1 + ".png";
var imageSelector2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imageSelector1);

document.querySelector(".img2").setAttribute("src", imageSelector2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "It's a draw!";
}
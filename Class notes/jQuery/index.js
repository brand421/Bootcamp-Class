
// $("h1").text("bye");

// $("button").text("Don't click");

// $("button").html("<em>Hello!<em>")

// console.log($("img").attr("src"));

// $("a").attr("href", "http://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "green");
});

// $("button").click(function() {
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
// });

$(document).keydown(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
})

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
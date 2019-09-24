$(document).ready(function() {
  var body = $("body");
  $("ul > li");
  $(".logo");
  $("#player-hand");

  $("button").click(onButtonClick);
  var onButtonClick = function() {
    $("h1").slideToggle("slow", () => {});
  };
});

$("#main-title").text("all the things changed");

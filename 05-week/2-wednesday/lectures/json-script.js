// Credit: https://en.wikipedia.org/wiki/Ajax_%28programming%29
// This is the client-side script.

// Initialize the HTTP request.
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=e03ca193");

// Track the state changes of the request.
xhr.onreadystatechange = function() {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the output.'
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); // An error occurred during the request.
    }
  }
};
xhr.send(null);

// AJAX
$.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=e03ca193",
  dataType: "JSON", // data type expected from server
  success: function(response) {
    console.log(response);
    showMovieDetails(response.Title, response.Released);
  },
  error: function(error) {
    console.log("Error: " + error);
  }
});

function showMovieDetails(title, released) {
  var heading = $("<h1/>").text(title);
  $("body").append(heading);
  var released = $("<h2/>").text(released);
  $("body").append(released);
}

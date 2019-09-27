var omdbapiRequest = fetch("http://www.omdbapi.com/?i=tt3896198");

omdbapiRequest
  .then(response => {
    if (response.status != 200) {
      // report bug to servers
      throw "There is something wrong, please try again later";
    } else {
      return response;
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(reason => {
    alert(reason);
  });

var movie;

// omdbapiRequest
//   .then(response => response.json()) // => no '{}' returns
//   .then(bodyObject => {
//     console.log(bodyObject);
//     return bodyObject;
//   })
//   .then(movieData => {
//     movie = movieData;
//     // build site
//   });

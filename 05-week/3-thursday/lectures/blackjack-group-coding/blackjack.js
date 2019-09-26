function card() {
  let card = document.createElement("img");
  card.setAttribute("src", "card-images/2_of_clubs.png");
  card.setAttribute("alt", "photo of 2 of clubs card");
  card.setAttribute("class", "card");
  return card;
}

function draw(person) {
  document.getElementById(person + "-hand").appendChild(card());
}

function deal() {
  draw("player");
  draw("player");
  draw("dealer");
  draw("dealer");
}

var deck = generateDeck();

function generateDeck() {
  let tempDeck = [];
  for (let i = 1; i <= 13; i++) {
    ["clubs", "hearts", "spades", "diamonds"].forEach(suit => {
      tempDeck.push({
        point: i > 10 ? 10 : i,
        name: cardName(i),
        suit: suit
      });
    });
  }
  return tempDeck;
}

function cardName(number) {
  switch (number) {
    case 1:
      return "ace";
    case 11:
      return "jack";
    case 12:
      return "queen";
    case 13:
      return "king";
    default:
      return number;
  }
}

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

var deck = generateDeck();

class Person {
  constructor(name) {
    this.handId = name + "-hand";
    this.pointsId = name + "-points";
    this.hand = [];
    this.points = 0;
  }
}

var player = new Person("player");
var dealer = new Person("dealer");

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

function card(person) {
  let card = deck.pop();
  person.hand.push(card);
  let element = document.createElement("img");
  element.setAttribute("src", `card-images/${card.name}_of_${card.suit}.png`);
  element.setAttribute("alt", `photo of ${card.name} of ${card.suit} card`);
  element.setAttribute("class", "card");
  return element;
}

function draw(person) {
  document.getElementById(person.handId).appendChild(card(person));
  person.points = calcPoints(person.hand);
  $(`#${person.pointsId}`).text(person.points);
}

function calcPoints(hand) {
  let points = 0;
  hand.forEach(card => {
    points += card.point;
  });
  return points;
}

function deal() {
  draw(player);
  draw(dealer);
  draw(player);
  draw(dealer);
}

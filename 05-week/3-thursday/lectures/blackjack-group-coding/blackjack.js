var deck = shuffle(generateDeck().concat(generateDeck(), generateDeck()));

class Person {
  constructor(name) {
    this.name = name;
    this.handId = name + "-hand";
    this.pointsId = name + "-points";
    this.hand = [];
    this.points = 0;
  }
}

var player = new Person("player");
var dealer = new Person("dealer");

// credit: https://gist.github.com/pizzapanther/fd7e9bd1a971c76b17c1159392a26a2e
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

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
  // swap hole card for back image
  // if first card in players hand
  if (person.name == "dealer" && person.hand.length == 1) {
    element.setAttribute("src", `card-back.png`);
    element.setAttribute("id", "hole-card");
  } else {
    element.setAttribute("src", `card-images/${card.name}_of_${card.suit}.png`);
  }

  element.setAttribute("alt", `photo of ${card.name} of ${card.suit} card`);
  element.setAttribute("class", "card");
  return element;
}

function draw(person) {
  document.getElementById(person.handId).appendChild(card(person));
  person.points = calcPoints(person.hand);
  $(`#${person.pointsId}`).text(person.points);
  if (person.points > 21) {
    gameOver(`The ${person.name} busted`);
  }
}

function stand() {
  $(".play").hide();
  while (dealer.points < 17) {
    draw(dealer);
  }
  var winner = "Dealer";
  if (dealer.points > 21 || player.points > dealer.points) {
    winner = "Player";
  }
  showCardInHole();
  gameOver(`${winner} wins`);
}

function showCardInHole() {
  document
    .getElementById("hole-card")
    .setAttribute(
      "src",
      `card-images/${dealer.hand[0].name}_of_${dealer.hand[0].suit}.png`
    );
}

function calcPoints(hand) {
  let totalPoints = 0;
  descHandPoints = hand.map(card => card.point).sort((a, b) => b - a);
  descHandPoints.forEach(point => {
    if (point == 1 && totalPoints < 11) {
      totalPoints += 11;
    } else {
      totalPoints += point;
    }
  });
  return totalPoints;
}

function gameOver(message) {
  $(".start").hide();
  $(".play").hide();
  $(".popup-container").show();
  $("#message").text(message);
  $("#game-active-buttons").hide();
  $("#game-over-buttons").show();
}

function deal() {
  $(".start").hide();
  $(".play").show();
  draw(player);
  draw(dealer);
  draw(player);
  draw(dealer);

  if (
    (dealer.points == 21 && player.points == 21) ||
    (dealer.points == 21 && player.points != 21)
  ) {
    gameOver("Dealer wins");
  } else if (player.points == 21 && dealer.points != 21) {
    gameOver("Player wins");
  }
}

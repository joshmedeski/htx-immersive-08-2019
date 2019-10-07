const cowsay = require("cowsay");

var says = phrase => {
  return cowsay.think({ text: phrase });
};

module.exports = {
  says: says
};

class Animal {
  constructor(weight, voice, skin) {
    this.voice = voice;
    this.skin = skin;
    this.weight = weight;
  }
}

class Dog extends Animal {
  constructor(weight, voice, favoriteToy) {
    super(weight, voice, "fur");
    this.favoriteToy = favoriteToy;
  }
}

class Fish extends Animal {
  constructor(weight, oceanFoundIn) {
    super(weight, "blub", "scales");
    this.oceanFoundIn = oceanFoundIn;
  }
}

function dog(weight, voice) {
  return {
    weight: weight,
    voice: voice
  };
}

const dogFromFunction = dog(50, "bark");

console.log(dogFromFunction);

const joshsDog = new Dog(30, "bark", "tennis ball"); // { wight: 30, voice: 'bark', skin: 'fur'}
const stevensDog = new Dog(80, "woof");
const fish = new Fish(220, "Pacific");

console.log(joshsDog);
console.log(stevensDog);
console.log(fish);

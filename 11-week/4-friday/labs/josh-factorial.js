// 1st method
const input = 5;

let index;
let output = input;

for (index = input - 1; index > 0; index--) {
  output = output * index;
}

console.log(`The factorial of ${input} is ${output}`);

// 2nd method
var num = 5;
var result = num;

while (num > 1) {
  num--;
  result = num * result;
}

console.log(`The num ${num} factorial is ${result}`);

// 3rd Method
// recursive function

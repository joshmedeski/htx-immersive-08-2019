// Data Types

// "string"
// {} object
// Number
// Function
// Boolean
// Date

var isFriendly = true; // boolean

console.log(typeof isFriendly);

if (typeof isFriendly !== "boolean") {
  throw new Error("isFriendly is the wrong data type");
}

isFriendly = "Whoops";

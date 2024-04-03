let x = 7;
let y = 7;
let z = 7;
if (x > y && x > z) {
  console.log("The value of 'X' is MAX.");
} else if (y > z && y > x) {
  console.log("The value of 'Y' is MAX");
} else if (z > x && z > y) {
  console.log("The value of 'Z' is MAX");
} else {
  console.log("We cant recognize the MAX value. :(");
}

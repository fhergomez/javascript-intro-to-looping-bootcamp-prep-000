function forLoop (array) {
  for (let i = 0, i < 25, i++) {
    array.push("I am ${i} strange loop$(i === 1 ? '' : 's')");
  }
  return array;
}

forLoop();

function whileLoop (array) {

}





function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

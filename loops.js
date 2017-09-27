function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop$(i === 1 ? '' : 's')"`);
  }
  return array;
}

function whileLoop (number) {
  var counter = number;
  while (counter > 0) {
    counter--;
    console.log(counter);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue());
  return array;
}

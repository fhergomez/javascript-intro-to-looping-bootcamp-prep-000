function forLoop (array) {
  for (let i = 0, i < 25, i++) {
    array.push("I am ${i} strange loop$(i === 1 ? '' : 's')");
  }
  return array;
}

function forLoop(array){
  for(var i=0;i<25;i++){
    if(i===1){
      array.push(`"I am ${i} strange loop"`);
    } else {
      array.push(`"I am ${i} strange loops"`);
    }
  }
  return array
};

function whileLoop (array) {

}





function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

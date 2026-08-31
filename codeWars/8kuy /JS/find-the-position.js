function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));

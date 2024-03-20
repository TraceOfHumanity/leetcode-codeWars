// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

// var greet = () => {
//   return "h" + "e" + "l" + "l" + "o" + " " + "w" + "o" + "r" + "l" + "d" + "!";
// };

var greet = () => {
  return "01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001".split(' ').map(function(binary) {
    return String.fromCharCode(parseInt(binary, 2))
  }).join('');
}

console.log(greet())
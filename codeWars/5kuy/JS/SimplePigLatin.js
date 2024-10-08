// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       // Check if the word is a punctuation mark
//       if (/[a-zA-Z]/.test(word)) {
//         return word.slice(1) + word[0] + "ay";
//       }
//       return word;
//     })
//     .join(" ");
// }

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !

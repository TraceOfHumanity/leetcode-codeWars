// Task
// Write function which validates an input string. If the string is a perfect square return true,false otherwise.

// What is perfect square?
// * We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
// * Perfect squares must have same width and height -> cpt.Obvious
// * Squares of random sizes will be tested!
// Function input:
// perfectSquare = "...\n...\n...";

// // This represents the following Perfect Square:

// `...
//  ...
//  ...`

// notPerfect = "..,\n..\n...";

// // This is not a Perfect Square:

// `..,
//  ..
//  ...`

function perfectSquare(string) {
  let arr = string.split("\n");
  console.log(arr);

  let length = arr[0].length;
  console.log(length);

  if (arr.length !== length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== length) return false;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== ".") return false;
    }
  }
  return true;
}

console.log(perfectSquare("...\n...\n..."));
// console.log(perfectSquare("..,\n..\n..."));
// console.log(perfectSquare(".....\n...\n....\n...."));

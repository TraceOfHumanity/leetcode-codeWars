// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  let sum = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  return sum.toString().length > 1 ? digitalRoot(sum) : sum;
}

console.log(digitalRoot(16)) // should return 7
console.log(digitalRoot(942)) // should return 6
console.log(digitalRoot(132189)) // should return 6
console.log(digitalRoot(493193)) // should return 2
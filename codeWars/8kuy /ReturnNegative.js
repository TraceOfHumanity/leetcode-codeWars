// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num > 0 ? -num : num;
}

console.log(makeNegative(42)) // should return -42
console.log(makeNegative(-9)) // should return -9
console.log(makeNegative(0)) // should return 0
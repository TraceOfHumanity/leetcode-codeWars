// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

function squareSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let result = [];
  numbers.map((item) => {
    let quatro = result.push(item * item);
    console.log(result);
    return quatro;
  });
  return result.reduce((accum, item) => {
    accum = accum + item;
    return accum;
  });
}

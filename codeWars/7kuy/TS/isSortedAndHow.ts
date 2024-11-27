// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


export function isSortedAndHow(array: number[]): string {
  const ascending = array.every((value, index, array) => {
    return index === 0 || value >= array[index - 1];
  });
  const descending = array.every((value, index, array) => {
    return index === 0 || value <= array[index - 1];
  });
  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
}

console.log(isSortedAndHow([1, 2, 3, 4, 5]));
console.log(isSortedAndHow([5, 4, 3, 2, 1]));
console.log(isSortedAndHow([1, 3, 2, 4, 5]));

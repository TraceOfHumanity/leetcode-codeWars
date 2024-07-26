/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_'). */

function solution(str){
  let arr = str.split('');
  let result = [];
  for (let i = 0; i < arr.length; i+=2) {
    if (arr[i+1] === undefined) {
      result.push(arr[i] + '_');
    } else {
      result.push(arr[i] + arr[i+1]);
    }
  }
  return result;
}

console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let splitString = string.replace(/([A-Z])/g, " $1");
  let middleResult = splitString.charAt(0).toUpperCase() + splitString.slice(1);
  let result = middleResult.charAt(0).toLowerCase() + splitString.slice(1)
  console.log(result); // "Це Camel Case Рядок"
  return result
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));

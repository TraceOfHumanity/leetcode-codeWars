// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])) // should return "(123) 456-7890"
console.log(createPhoneNumber([1,1,1,1,1,1,1,1,1,1])) // should return "(111) 111-1111"
console.log(createPhoneNumber([0,0,0,0,0,0,0,0,0,0])) // should return "(000) 000-0000"
console.log(createPhoneNumber([9,8,7,6,5,4,3,2,1,0])) // should return "(987) 654-3210"
console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9])) // should return "(012) 345-6789"
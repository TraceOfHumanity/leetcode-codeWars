// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

export function isPalindrome(x: string): boolean {
  return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("123456"));
console.log(isPalindrome("12345654321"));
console.log(isPalindrome("1234567890"));
console.log(isPalindrome("1234567890987654321"));

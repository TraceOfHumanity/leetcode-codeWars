<<<<<<< HEAD
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// test('', {});
// test('a', {'a': 1});
// test('ab', {'a': 1, 'b': 1});
// test('aba', {'a': 2, 'b': 1});
// test('ABC', {'A': 1, 'B': 1, 'C': 1});

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

console.log(count(""))
console.log(count("a"))
console.log(count("ab"))
console.log(count("aba"))
console.log(count("ABC"))
=======
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// test('', {});
// test('a', {'a': 1});
// test('ab', {'a': 1, 'b': 1});
// test('aba', {'a': 2, 'b': 1});
// test('ABC', {'A': 1, 'B': 1, 'C': 1});

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

console.log(count(""))
console.log(count("a"))
console.log(count("ab"))
console.log(count("aba"))
console.log(count("ABC"))
>>>>>>> be01eb10ce8dab6ec59999840e88653fb25ed6a2

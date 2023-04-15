// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

// function nextSmaller(n) {
//   var nArray = n.toString().split("");
//   var length = nArray.length;
//   var minimumNum = 1 + Array(length).join("0");
//   for (var i = n - 1; i >= minimumNum; i--) {
//     var newNumArray = i.toString().split("");
//     var counter = 0;
//     for (var j = 0; j < newNumArray.length; j++) {
//       if (nArray.indexOf(newNumArray[j]) < 0) break;
//       counter++;
//       nArray.splice(nArray.indexOf(newNumArray[j]), 1);
//       if (counter === length) {
//         return i;
//       }
//     }
//     nArray = n.toString().split("");
//   }
//   return -1;
// }
// console.log(nextSmaller(21));
// console.log(nextSmaller(907));
// console.log(nextSmaller(531));
// console.log(nextSmaller(135));
// console.log(nextSmaller(2071));
// console.log(nextSmaller(1027));
// console.log(nextSmaller(414));
// nextSmaller(21), 12)
// nextSmaller(907), 790)
// nextSmaller(531), 513)
// nextSmaller(135), -1)
// nextSmaller(2071), 2017)
// nextSmaller(1027), -1)
// nextSmaller(414), 144)
// function nextSmaller(n) {
//   const arr = (n + "").split("").map(Number);
//   arr;
//   // Find longest non-decreasing suffix
//   let i,
//     prev = 9;
//   for (i = arr.length; i--; ) {
//     if (arr[i] > prev) break;
//     prev = arr[i];
//     prev
//   }

//   // If whole sequence is non-decreasing,
//   // it is already the smallest permutation
//   if (i < 0) return -1;

//   const pivot_i = i;pivot_i
  
//   const pivot = arr[pivot_i];pivot

//   for (i = arr.length; i--; ) {
//     if (arr[i] < pivot) break;
//   }

//   arr[pivot_i] = arr[i];
//   console.log(arr[pivot_i] = arr[i])
//   arr[i] = pivot;
//   console.log(arr[i] = pivot)

//   if (arr[0] === 0) return -1;

//   return +arr
//     .slice(0, pivot_i + 1)
//     .concat(arr.slice(pivot_i + 1).reverse())
//     .join("");
// }
const nextSmaller = n => {
    let min = minify(n);
    min
    while (--n >= min) if (minify(n) === min) return n;
    return -1;
  };
  
  const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');

console.log(nextSmaller(21));
console.log(nextSmaller(907))
console.log(nextSmaller(531))
console.log(nextSmaller(135))
console.log(nextSmaller(2071))
console.log(nextSmaller(1027))
console.log(nextSmaller(414))

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

export function past(h: number, m: number, s: number): number {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
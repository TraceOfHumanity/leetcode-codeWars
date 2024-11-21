// Your task is to write function factorial.

export function factorial(n: number) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));

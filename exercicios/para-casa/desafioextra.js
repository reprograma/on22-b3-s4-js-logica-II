const numbers = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const result = numbers
  .slice(0, -1)
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(result);

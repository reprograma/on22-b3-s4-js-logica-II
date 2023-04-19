const numbers = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

//1
numbers.push(100, 200);
console.log(numbers);

//2
var shifted = numbers.shift();
console.log(numbers);

//3
var unshifted = numbers.unshift(5);
console.log(numbers);

//4 (extra)
var poped = numbers.pop();
console.log(numbers);

//5
numbers.forEach((number) => {
  console.log(number);
});
//6
var sliced = numbers.slice(3, 5);
console.log(sliced);

//7
const result = numbers.filter((number) => {
  return number > 50;
});
 console.log(result);

//8 
const resu = numbers.find((numbers) => {
  return numbers %2 === 0
})
console.log(resu)

//9 
var resultadoMaps = numbers.map((numbers) =>{
  return numbers * 2 
})
console.log(resultadoMaps);

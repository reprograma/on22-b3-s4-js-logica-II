"Exercício 1"

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const newLength = numeros.push(100, 200)
console.log(numeros)


const numeros1 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const removedElement = numeros1.shift(); // removedElement = 10, array = [23, 45, 67, 89, 12, 34, 56, 78, 90]
console.log(numeros1)


const numeros2 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const addRetornatamanho = numeros2.unshift(5); // newLength = 5, array = [5, 10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
console.log(numeros2)


const numeros3 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
numeros3.forEach((element) => {
  console.log(element)
})


const numeros4 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
let sliced = numeros4.slice(2, 5)
console.log(sliced)


const numeros5 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const filteredNumbers = numeros5.filter((numeros5) => {
  return numeros5 > 50;
})
console.log(filteredNumbers)


const numeros6 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const foundNumber = numeros5.find((numeros6) => {
  return numeros6 % 2 === 0
})
console.log(foundNumber)


const numeros7 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
const mappedNumbers = numeros7.map((numeros7) => {
return numeros7 * 2
})
console.log(mappedNumbers)
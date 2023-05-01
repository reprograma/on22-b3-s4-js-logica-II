//Manipulação de arrays
//Exercícío 1: Considere o seguinte array de números:

// -Use o método push() para adicionar os números 100 e 200 no final do array.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const newLength = numeros.push(100, 200);
console.log(numeros)

// - Use o método shift() para remover o primeiro elemento do array.

const numeros1 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const removedElement = numeros1.shift(); // removedElement = 10, array = [23, 45, 67, 89, 12, 34, 56, 78, 90]
console.log(numeros1)

// - Use o método unshift() para adicionar o número 5 no início do array.
const numeros2 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const addRetornatamanho = numeros2.unshift(5); // newLength = 5, array = [5, 10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
console.log(numeros2)

// - Use o método forEach() para imprimir cada número do array no console.
const numeros3 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
numeros3.forEach((element) => {
  console.log(element);
});

// - Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
const numeros4 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let sliced = numeros4.slice(2, 5);
console.log(sliced);

// - Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.
const numeros5 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const filteredNumbers = numeros5.filter((numeros5) => {
  return numeros5 > 50;
});

console.log(filteredNumbers);

// - Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
const numeros6 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const foundNumber = numeros5.find((numeros6) => {
  return numeros6 % 2 === 0;
});

console.log(foundNumber); 

// - Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.
const numeros7 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const mappedNumbers = numeros7.map((numeros7) => {
return numeros7 * 2;
});

console.log(mappedNumbers); 
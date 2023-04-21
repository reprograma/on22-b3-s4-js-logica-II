// Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

let foundNumeros = numeros.find(numero => numero % 2 === 0);

console.log(foundNumeros);


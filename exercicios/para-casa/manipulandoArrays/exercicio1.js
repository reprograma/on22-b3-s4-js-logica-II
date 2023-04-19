// Use o método push() para adicionar os números 100 e 200 no final do array.
// Use o método shift() para remover o primeiro elemento do array.
// Use o método unshift() para adicionar o número 5 no início do array.
// Use o método forEach() para imprimir cada número do array no console.
// Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
// Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.
// Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
// Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
// push
numeros.push(100, 200);
console.log(numeros);

// shift
numeros.shift([0]);
console.log(numeros);

// unshift
numeros.unshift(5)
console.log(numeros);

// forEach
numeros.forEach((numero) => {
    console.log(numero);
})

// slice
const newArr = numeros.slice(2, 6);
console.log(newArr);

// filter
const newArray = numeros.filter((elementos) => {
    return elementos > 50
});
console.log(newArray);

// find
const numeroPar = numeros.find((numero) => {
    return numero % 2 == 0
});
console.log(numeroPar);

// map
const newMap = numeros.map((items) => {
    return items * 2
});

console.log(newMap);

// Bônus
// remove o ultimo elemento
const removeItem = numeros.pop();
console.log(removeItem);
// console.log(numeros);

const encadeandoMetodos = numeros
.filter((elemento) => {
    return elemento % 2 == 0
})
.map((elemento) => {
    return elemento * 2
});
console.log(encadeandoMetodos);

/*
Objetivo: Praticar o uso dos métodos push, shift, unshift, forEach, slice, filter, 
find e map para manipular um array de números.

Instruções:
Considere o seguinte array de números:*/

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
const newArr = numeros.slice(1, 5);
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


// remove o ultimo elemento
const removeItem = numeros.pop();
console.log(removeItem);


const encadeandoMetodos = numeros
.filter((elemento) => {
    return elemento % 2 == 0
})
.map((elemento) => {
    return elemento * 2
});
console.log(encadeandoMetodos);

console.log("ok.")


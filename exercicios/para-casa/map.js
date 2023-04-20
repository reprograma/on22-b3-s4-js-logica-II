// Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.

let numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

let mappedNumeros = numeros.map((numero) => {
    return numero * 2;
});
console.log(mappedNumeros);


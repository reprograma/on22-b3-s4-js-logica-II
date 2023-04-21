// Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.

let numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let filteredNumeros = numeros.filter((numeros) => {
    return numeros > 50;
});
console.log(filteredNumeros);

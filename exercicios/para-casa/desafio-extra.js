// BONUS ARRAYS

const numeros = [12,65,89,34,10,35,16,45,56,234];

numeros.pop();

numeros.filter(numero => numero % 2 == 0).map(numero => numero * 2);

console.log(numeros);
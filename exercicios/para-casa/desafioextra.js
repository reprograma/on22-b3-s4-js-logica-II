const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const numerosEncadeados = numeros
numeros.pop(); // o pop é o método que remove o último número do array
numeros.filter(numero => numero % 2 === 0); // o filter vai filtrar somente os números pares, quando colocado dessa forma
numeros.map(numero => numero * 2); // multiplica os números pares filtrados anteriormente por 2, solicitado pelo método map

console.log(numerosEncadeados)
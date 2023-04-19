const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
numeros.push(100, 200); //adicionei 100 e 200 ao final do array
numeros.shift(); //subtraí o primeiro número do array, não precisa colocar entre parênteses, é automático
numeros.unshift(5); // adicionei o número 5 no início do array
numeros.forEach(numero => console.log(numero)); //coloquei pra imprimir cada número no console.log
const novoArray = numeros.slice(2, 6); //criei um novo array com os números entre as posições 2 e 5
console.log(novoArray) //para aparecer no terminal o resultado
const numMaioresQue50 = numeros.filter (numero => numero > 50); //criei um array para números maiores que 50
console.log(numMaioresQue50); //para aparecer no terminal os números maiores que 50
const primeiroNumeroPar = numeros.find(numero => numero % 2 === 0) // criei o array pra encontrar o primeiro número par
console.log(primeiroNumeroPar); //para aparecer no terminal
const novoArrayComValorDobro = numeros.map (numero => numero * 2); //novo array que vai calcular o dobro de cada número
console.log(novoArrayComValorDobro); //para aparecer o resultado no terminal
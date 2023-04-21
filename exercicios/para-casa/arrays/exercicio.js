const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]


// - Use o método push() para adicionar os números 100 e 200 no final do array.
numeros.push(100,200)
console.log(numeros)
// - Use o método shift() para remover o primeiro elemento do array.
numeros.shift()
console.log(numeros)
// - Use o método unshift() para adicionar o número 5 no início do array.
numeros.unshift(5)
console.log(numeros)
// - Use o método forEach() para imprimir cada número do array no console.
numeros.forEach(numero => console.log(numero))
// - Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
const novoArray = numeros.slice(1,5)
console.log(novoArray)
// - Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.
const maioresQue50 = numeros.filter(numero => numero > 50)
console.log(maioresQue50)
// - Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
const numeroPar = numeros.find(numero => numero % 2 == 0)
console.log(numeroPar)
// - Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.
const dobroDeCadaNumero = numeros.map(numero => numero * 2 )
console.log(dobroDeCadaNumero)
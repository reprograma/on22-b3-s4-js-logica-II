const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
numeros.push(100, 200)
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.unshift(5)
console.log(numeros)

numeros.forEach(numero => console.log(numero))

const novosNumeros = numeros.slice(1, 5)
console.log(novosNumeros)

//usar metodo filter
//criar novo array
//condição números > 50
//imprimir nova array
const filtrarNumerosMaior50 = numeros.filter(numero => numero > 50)
console.log(filtrarNumerosMaior50)  

//usar o find
//encontrar primeiro número par
//imprimir esse número
const primeiroNumPar = numeros.find(numero => numero % 2 === 0)
console.log(primeiroNumPar)

//usar o map
//criar array com dobro de cada numero
//imprimir novo array
const dobroDeCadaNum = numeros.map(numero => numero * 2)
console.log(dobroDeCadaNum)
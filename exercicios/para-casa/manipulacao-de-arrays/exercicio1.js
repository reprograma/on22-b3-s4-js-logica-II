/* 
Considere o seguinte array de números:
- Use o método push() para adicionar os números 100 e 200 no final do array.
- Use o método shift() para remover o primeiro elemento do array.
- Use o método unshift() para adicionar o número 5 no início do array.
- Use o método forEach() para imprimir cada número do array no console.
- Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
- Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.
- Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
- Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.
*/

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
numeros.push(100, 200)
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.unshift(5)
console.log(numeros)

numeros.forEach((numero) => {
    console.log(numero)
})

const newArray= numeros.slice(1, 5)
console.log(newArray)

const arrayMaiorQueCinquenta = numeros.filter((numero) => {
    return numero > 50
})
console.log(arrayMaiorQueCinquenta)

const numeroPar = numeros.find((primeiroNumeroPar) => primeiroNumeroPar%2 == 0)
console.log(numeroPar)

const dobroArrays = numeros.map((dobrarValorArrays) => dobrarValorArrays*2)
console.log(dobroArrays)
/**
 * Use os métodos encadeados para remover o último elemento do array, em seguida, filtrar os números pares e, por fim, criar um novo array com os números pares multiplicados por 2. Imprima o novo array no console.
 */

const listaDeNumeros = [19,23,56,43,5,88,98,1,56,43]

listaDeNumeros.pop()

const novoArray = listaDeNumeros.filter(numero => numero % 2 == 0).map(numero => numero * 2)

console.log(novoArray)


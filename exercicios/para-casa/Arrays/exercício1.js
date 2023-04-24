/**Objetivo: Praticar o uso dos métodos push, shift, unshift, forEach, slice, filter, 
 * find e map para manipular um array de números. */


const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

//Use o método push() para adicionar os números 100 e 200 no final do array.
numeros.push(100,200)
console.log(numeros)

// Use o método shift() para remover o primeiro elemento do array.
numeros.shift()
console.log(numeros)

//Use o método unshift() para adicionar o número 5 no início do array.
numeros.unshift(5)
console.log(numeros)

//Use o método forEach() para imprimir cada número do array no console.
numeros.forEach(numero => console.log(numero));

/**Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). 
 * Imprima o novo array no console.*/
let novaLista = numeros.slice(1,4);
console.log(novaLista)

/**Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array 
 * no console.*/
let maiores50 = numeros.filter(numero => numero > 50);
console.table(maiores50)

/**Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no 
 * console.*/
let numeroPar = numeros.find(numero => numero % 2 == 0);
console.log(numeroPar)

/**Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no 
 * console*/
let numeroDobro = numeros.map(numero => numero * 2);
console.log(numeroDobro)

/** Use os métodos encadeados para remover o último elemento do array, em seguida, filtrar os números pares e, por fim, 
 * criar um novo array com os números pares multiplicados por 2. Imprima o novo array no console. */
numeros.pop();
console.log(numeros)

const filtrarParesEMutiplicar = numeros.filter(numero => numero % 2 == 0).map(numero => numero * 2)
console.log(filtrarParesEMutiplicar)



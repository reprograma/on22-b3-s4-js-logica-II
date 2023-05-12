//Objetivo: Praticar o uso dos métodos push, shift, unshift, forEach, slice, filter, 
//find e map para manipular um array de números.

//Instruções:
//Considere o seguinte array de números:

//```javascript
//const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
//```

//- Use o método push() para adicionar os números 100 e 200 no final do array.
//- Use o método shift() para remover o primeiro elemento do array.
//- Use o método unshift() para adicionar o número 5 no início do array.
//- Use o método forEach() para imprimir cada número do array no console.
//- Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). 
//Imprima o novo array no console.
//- Use o método filter() para criar um novo array com os números maiores que 50. 
//Imprima o novo array no console.
//- Use o método find() para encontrar o primeiro número par do array. 
//Imprima o número encontrado no console.
//- Use o método map() para criar um novo array com o dobro de cada número. 
//Imprima o novo array no console.

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const novosNumeros = numeros.push(100, 200)
const novosNumeros2 = numeros.shift()
const novosNumero3 = numeros.unshift(5)
numeros.forEach((element) => {
    console.log(element);
  });

let numeros2 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let sliced = numeros2.slice(2,5);
console.log(sliced)

const numeros3 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const numerosFiltrados =  numeros3.filter((numeros3) => {
    return numeros3 > 50;
})
console.log(numerosFiltrados)

























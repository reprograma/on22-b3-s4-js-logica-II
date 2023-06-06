const numeros = [10,23,45,67,89,12,34,56,78,90];
//add numeros 100 , 200 no final do array
numeros.push(100,200);

//removendo o primeiro numero do array
numeros.shift();

//add numero 5 no inicio do array
numeros.unshift(5);

//imprimir cada numero no array do console
numeros.forEach(        console.log(numero));
(novoArray)
//criar novo array com os numeros nas posições 2 e 5 (inclusive)
const novoArray = numeros.slice(2,6);
console.log(novoArray);

//criar novo array com numeros maiores que 50
const numerosMaioresQue50 = numeros.filter(    numero>50);
console.log(numerosMaioresQue50);

//encontrar o primeiro numero par do array
const primeiroPar = numeros.find(     numero % 2===0);
console.log(primeiroPar);

//criar um novo array com o dobro de cada numero
const numerosDobro = numeros.map(   numero*2);
console.log(numerosDobro);
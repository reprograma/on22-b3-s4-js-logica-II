const numeros = [10,23,45,67,89,12,34,56,78,90];

const numerosSemUltimo = numeros.slice(0,-1); // remove o ultimo elemento do array
const numerosPares = numerosSemUltimo.filter(      numero % 2=== 0);
const numerosParesDobro = numerosPares.map(    numero* 2);

//criar um novo array com os numeros pares e multiplicados por 2
console.log (numerosParesDobro)
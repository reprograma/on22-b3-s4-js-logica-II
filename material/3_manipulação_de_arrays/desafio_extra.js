//
//

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

numeros.pop();

numeros.filter((pares) => pares % 2 == 0);

let paresDobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log(paresDobrados);

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];{

/**const adicionadoF = numeros.push(100, 200);

const removido = numeros.shift();

const adicionadoC = numeros.unshift(5);
numeros.forEach((element) => {
    console.log(element);
  });

let sliced = numeros.slice(2, 5)
console.log(sliced);

const filtro = numeros.filter((number) => {
    return number >50;
});
console.log(filtro);

const achar = numeros.find((number) => {
    return number % 2 == 0;
});
console.log(achar);

const dobrar = numeros.map((number) => {
    return number * 2;
});
console.log(dobrar);
**/

let sliced = numeros.slice(0, numeros.length-1)

let filtrar = sliced.filter((number) => {
    return number % 2 === 0;
});

let dobra = filtrar.map((number) => {
    return number *2;
});

console.log(dobra)

}
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

console.log(`Array inicial:\n${numeros}.\n`);

numeros.push(100,200);

console.log(`Array após o usar o método push com os números 100 e 200:\n${numeros}.\n`);

numeros.shift();

console.log(`Array após remover o primeiro elemento com o método shift:\n${numeros}.\n`);

numeros.unshift(5);

console.log(`Array após adicionar o número 5 ao início usando o método unshift:\n${numeros}.\n`);

console.log("Array sendo impresso elemento por elemento e seu respectivo número de index:\n")
numeros.forEach((numero, index) => {
    console.log(`Elemento ${index}: ${numero}`);
})

const cortados = numeros.slice(2,6);

console.log(`Array criado a partir do corte do Array anterior, com os elementos de index 2 ao 5:\n${cortados}.\n`);

console.log(numeros);
let filtrados = numeros.filter(function (number) {
    return number > 50;
});
filtrados.sort(function (a,b){ 
    return a-b});

console.log(`Array criado com os elementos filtrados do Array original, com elementos maiores que 50 em ordem crescente:\n${filtrados}.\n`);

const buscado = numeros.find((number) => {
    return (number % 2 == 0 && number != 0); 
});

console.log(`Primeiro elemento par do Array [${numeros}]:\n${buscado}.\n`);

const dobrados = numeros.map((number) => {
    return number * 2;
});

console.log(`Array Original:\n${numeros}.\nArray original com todos os elementos multiplicados por 2:\n${dobrados}.`);
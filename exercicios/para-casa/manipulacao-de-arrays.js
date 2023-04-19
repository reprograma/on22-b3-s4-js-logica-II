/* Instruções: Considere o seguinte array de números:

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

    Use o método push() para adicionar os números 100 e 200 no final do array.
    Use o método shift() para remover o primeiro elemento do array.
    Use o método unshift() para adicionar o número 5 no início do array.
    Use o método forEach() para imprimir cada número do array no console.
    Use o método slice() para criar um novo array com os números entre as posições 
    2 e 5 (inclusive). Imprima o novo array no console.
    Use o método filter() para criar um novo array com os números maiores que 50. 
    Imprima o novo array no console.
    Use o método find() para encontrar o primeiro número par do array. Imprima o 
    número encontrado no console.
    Use o método map() para criar um novo array com o dobro de cada número. 
    Imprima o novo array no console.
*/

const arrayExercicioPush = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
arrayExercicioPush.push(100, 200);
console.log("Saída do método push(100, 200): " + arrayExercicioPush);

const arrayExercicioShift = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
arrayExercicioShift.shift();
console.log("Saída do método shift() => " + arrayExercicioShift);

const arrayExercicioUnshift = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
arrayExercicioUnshift.unshift(5);
console.log("Saída do método unshift(5) => " + arrayExercicioUnshift);

const arrayExercicioForEach = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
console.log("Saída do método forEach(): ");
arrayExercicioForEach.forEach(function (arrayExercicioForEach) {
    console.log(arrayExercicioForEach);
});

const arrayExercicioSlice = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let numerosPosicaoDoisACinco = arrayExercicioSlice.slice(2, 6);

console.log("Saída do método slice(2, 4) => " + numerosPosicaoDoisACinco);

const arrayExercicioFilter = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let numerosMaioresQueCinquenta = arrayExercicioFilter.filter(filtraNumerosMaioresQueCinquenta);

function filtraNumerosMaioresQueCinquenta(numeroDoArray) {
    return numeroDoArray > 50;
}
console.log("Saída do método filter() para os numeros maiores que 50 => " + numerosMaioresQueCinquenta);

const arrayExercicioFind = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
// const numerosPares = arrayExercicioFind.find((num) => num % 2 === 0);
function encontraNumeroPar(num) {
    return (num) => num % 2 === 0;
}
console.log("Saída do método find() para encontrar o primeiro numero par do array => " + arrayExercicioFind.find(encontraNumeroPar));

///
const arrayMap = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const arrayMapVezesDois = arrayMap.map(itemDoArray => {
    return itemDoArray * 2;
});

console.log("Saída do método map() com itens do array multiplicados por 2 => " + arrayMapVezesDois);

/*Desafio extra:

    Use os métodos encadeados para remover o último elemento do array, em seguida, 
    filtrar os números pares e, por fim, criar um novo array com os números pares 
    multiplicados por 2. Imprima o novo array no console.*/

const arrayDesafioExtra = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const extra = arrayDesafioExtra.pop();
const extra1 = arrayDesafioExtra.filter(num => num % 2 === 0)
    .map(num => num * 2);
console.log("Saída do desafio extra => " + extra1);

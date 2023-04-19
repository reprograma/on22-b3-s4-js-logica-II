const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

numeros.push(100, 200)
console.log(numeros)

numeros.shift(0)
console.log(numeros)

numeros.unshift(5)
console.log(numeros)

numeros.forEach((numero, index)=>{
    console.log(numeros[index])
})

lista2 = numeros.slice(2, 6);
console.log(lista2)

lista3 = numerosFiltrados = numeros.filter((numero) => {
    return numero > 50;
})
console.log(lista3)

numeros.find((numero) => {
    if (numeros[numero] % 2 == 0){
        console.log(numeros[numero])
    }
});

numerosMapeados = numeros.map((numero) => {
    return numero * 2;
})
console.log(numerosMapeados)
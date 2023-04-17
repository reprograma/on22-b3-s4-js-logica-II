//
//

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

numeros.push(100, 200) 
numeros.unshift(5)

numeros.forEach((numero) => {
    console.log(numero)
})

let menosNumeros = numeros.slice(1,5)

//issue: must implement solution to log space after array values
console.log(" ")

menosNumeros.forEach((numero) => {
    console.log(numero)
})

console.log(" ")

let numsMaisQue50 = numeros.filter((numero) => {
    return numero >= 50
})

for (valor of numsMaisQue50.values()) {
    console.log(valor)


    //this method still doesn't work
    //if (numsMaisQue50.indexOf() == numsMaisQue50.length) {
    //    console.log(" ")
    //}
}

console.log(" ")

numsMaisQue50.find((numero) => {
    if (numero % 2 == 0) {
        console.log(numero)
        break
    }
})
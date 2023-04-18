//
//

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]

numeros.push(100, 200) 
numeros.unshift(5)

numeros.forEach((numero) => {
    console.log(numero)
})

let menosNumeros = numeros.slice(1,5)

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
}

console.log(" ")

let primeiroPar = numeros.find((numero) => {
  if (numero % 2 == 0) {
    return numero
  }
})
console.log(primeiroPar)

console.log(" ")

let numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});

numerosDobrados.forEach((numero) => {
  console.log(numero)
})
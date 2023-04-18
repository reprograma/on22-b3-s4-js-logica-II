const numeros = [10,23,45,67,89,12,34,56,78,90]

numeros.push(100)
numeros.push(200)
console.log(numeros)

//////////////

numeros.shift()
console.log(numeros)

////////////

numeros.unshift(5)
console.log(numeros)

///////////

numeros.forEach(item=>console.log(item))

//////////

console.log(numeros.slice(2,5))

/////////

const novoArray = numeros.filter(item => item>50)
console.log(novoArray)

/////////

console.log(numeros.find(item => item % 2 == 0))

////////

let numerosDobro = numeros.map((numero)=>{return numero * 2})
console.log(numerosDobro)

////////

console.log(numeros.pop())
const pares = numeros.filter(item=>item%2==0)
console.log(pares)
const paresVezesDois = pares.map((num)=>{return num*2})
console.log(paresVezesDois)
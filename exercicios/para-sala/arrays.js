// Maçã = index 0 ... Pêra = index 4
let listaDeFrutas = ["Maçã","Banana","Laranja","Tomate","Pêra"]
// let arrayNew = new Array("Maçã","Banana","Laranja","Tomate",0)

console.log(listaDeFrutas)
console.log(listaDeFrutas.length)


// Acessando itens do array
console.log(listaDeFrutas[6]) // undefined
console.log(listaDeFrutas[3]) // Tomate

let listaDeFrutas2 = ["Maçã","Banana","Laranja","Tomate","Pêra"]

for(let i = 0;i < listaDeFrutas2.length;i++){

    console.log(listaDeFrutas2[i])
}

// Adicionando Itens em um array

listaDeFrutas2.push("Jaca","Melão")

console.log(listaDeFrutas2)

// Retirando Itens de um array

listaDeFrutas2.pop()


console.log(listaDeFrutas2)


// Modificando itens do meu array

let listaDeCarros = ["Celta","Uno","Palio"]
listaDeCarros[4] = "Prisma"

console.log(listaDeCarros)
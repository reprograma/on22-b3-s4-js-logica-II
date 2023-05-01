/***Exercício 1:**

**Instruções:** Crie um array com 5 números. Em seguida crie um `for` que imprima
 cada número do array no console.

_Dica: Utilize a propriedade length do array para definir a condição de parada do loop._*/

console.log("iniciando a jornada: reprogramar o aprendizado.")

let listaDeNumeros = [58, 95, 32, 47, 73];

for(let i = 0;i < listaDeNumeros.length;i++){

    console.log(listaDeNumeros[i])
}

console.log("continua...")

/*
**Exercício 2:**

**Instruções:** Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.

_Dica: Utilize a sintaxe for (propriedade in objeto) para percorrer o objeto. Para acessar o valor 
da propriedade, utilize a sintaxe objeto[propriedade]._
*/

console.log("dividindo para conquistar.")

let animal = {
    propiedade:"tartaruga",
    descrição:{
    nome:"orus",
    cor:"verde com uma marca vermelha",
    nome_cuidador:"Morgana Evellyn",
     
    }
    
}
for (let tartaruga in animal.descrição){

    console.log(animal.descrição[tartaruga])
}

console.log("continue a fazer.")

/* **Exercício 3:**

**Instruções:** Crie um array com 5 strings. Em seguida `for...of` que imprima cada string do array no console.

Dica: Utilize a sintaxe for (variavel of array) para percorrer o array. A variável variavel irá assumir o 
valor de cada elemento do array a cada iteração do loop.*/
console.log("se desafie e faça o seu melhor")

const listaDeCompra = ["meia","sandalia","roupa","laço","sapato"]

for (let item of listaDeCompra){
    
    console.log(item)
}

console.log("proximo...")

/* **Exercício 4:**

Instruções:.Crie um array com 5 número.Crie um `while` que imprima cada número do array no console.

_Dica: Utilize uma variável de controle para definir a condição de parada do loop. A cada iteração,
 incremente essa variável._*/

console.log("mais uma vez aqui.")
let i = 0;
const number = [23, 57, 68, 75, 94]
while(i < number.length){
    
    console.log(number[i]);
    i++;
}
console.log("voltei... deu certo." )

console.log("seja o que for.")


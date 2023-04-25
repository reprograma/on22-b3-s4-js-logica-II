/* 
**Exercício 2:**

**Instruções:** Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.

_Dica: Utilize a sintaxe for (propriedade in objeto) para percorrer o objeto. Para acessar o valor da propriedade, utilize a sintaxe objeto[propriedade]._
*/

const animal = {
    nome: "Sandra",
    idade: 2,
    nome_dono: "Ângela Oliveira"
}

const pessoa = {
    nome: "Luan Fonseca",
    idade: 30,
    profissao: "Programador"
}

for (const i in animal) {   
    console.log(`${i}: ${animal[i]}`)
}

for (const i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`)
}
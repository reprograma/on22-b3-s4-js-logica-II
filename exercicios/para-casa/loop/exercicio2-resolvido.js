/**Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.*/


const animal = {
    nome: "Sol",
    cor: "Branco com caramelo",
    idade: 2,
    nome_dono: "Karina"
}

for(propriedade in animal){
    console.log(`${propriedade}:${animal[propriedade]}`)
}

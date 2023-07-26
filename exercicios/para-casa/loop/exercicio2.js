/**Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.*/

const animal = {
    nome:"Jeová",
    cor:"amarelo e branco",
    nome_dono:"Beatriz"
}

for(dono in animal){
    console.log(`${dono}:${animal[dono]}`)
} 
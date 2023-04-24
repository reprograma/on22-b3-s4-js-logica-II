/**Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.
 */

let animalDeCasa = {
    nome: "Tony Stark",
    cor: "Preto",
    idade: 4,
    nome_dono: "Jucilene",
    raça: "Pitbull",
    peso: 43
}

for(propriedade in animalDeCasa){
    console.log(`${propriedade}: ${animalDeCasa[propriedade]}`)

}
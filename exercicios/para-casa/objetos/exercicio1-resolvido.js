/**Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.*/


let pessoa = {
    nome: "Karina",
    idade: 36,
    saudacao: function() {
        return `Olá ${this.nome}, este será o inicio de uma grande jornada junto a Reprograma. Bem vinda ao time de mulheres incríveis!!!`
    }
};

const impressao = pessoa.saudacao()
console.log(impressao)

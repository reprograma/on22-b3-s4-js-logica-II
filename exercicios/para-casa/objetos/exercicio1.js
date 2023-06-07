/**Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.*/

const pessoa = {
    nome:"Manuelly",
    idade:30,
    saudacao:function(){
        return `Olá ${this.nome}, Seja Bem-Vindo(a)`
    }
}

const saudacao = pessoa.saudacao()

console.log(saudacao)
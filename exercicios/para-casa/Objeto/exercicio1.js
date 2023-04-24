/**Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa. */

let pessoa = {
    nome: "Jucilene",
    idade: 37,
    saudação:function(){ 
        console.log(`Olá ${this.nome}, que seu dia seja magnifico!`)
    }
}

pessoa.saudação()

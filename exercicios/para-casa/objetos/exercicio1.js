const pessoa = {
    nome: "Laura",
    idade: 30,
    saudacao: function(mensagem) {
        console.log(`${mensagem} ${this.nome}`);
    }
}

pessoa.saudacao("Olá");
// console.log(pessoa.idade);
// console.log(pessoa.nome);
// console.log(pessoa.saudacao);

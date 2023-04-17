//
//

const pessoa = {
    nome: "Erika",
    idade: 27,
    saudacao() {
        console.log(`Olá, ${this.nome}!`),
    }
}

saudacao(pessoa)
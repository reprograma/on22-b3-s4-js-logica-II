const pessoa = {
    nome: "Maay",
    idade: 29,
    saudacao() {
        console.log(`Olá, eu sou a ${this.nome} e tenho ${this.idade} anos.`)
    }
}

pessoa.saudacao();
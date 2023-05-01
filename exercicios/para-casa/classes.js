class pessoa {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log(`olá, meu nome é ${this.nome} eu tenho ${this.idade} anos :)`)
    }
}

let dados = new pessoa('gracielle', 22)

console.log(dados.nome)
console.log(dados.idade)
dados.falar()
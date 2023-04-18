//
//

class Pessoa {constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let erika = new Pessoa("Erika", 27)

console.log(erika.saudacao())
//
//

let pessoa = {
    nome: "Erika",
    idade: 27,

    saudacao () {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

console.log(pessoa.saudacao())
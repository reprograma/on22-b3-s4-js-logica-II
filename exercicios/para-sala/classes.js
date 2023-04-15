class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    fale(mensagem){
        console.log(`${mensagem} ${this.nome}`)
    }

    ande(){
        console.log(`Essa pessoa de nome: ${this.nome} está andando`)
    }
}

const pessoa = new Pessoa("Manuelly",30)
const pessoa2 = new Pessoa("Andreza", 27)

pessoa.fale("Seja Bem-vinda")

pessoa2.fale("Bom dia")


for (let i = 0;i <5; i++){
    let pessoaNova = new Pessoa(`Nome da Pessoa ${i}`)

    pessoaNova.ande()
}

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(mensagem){
        console.log(`${mensagem} ${this.nome} ${this.idade}`)
    }
}
const pessoa = new Pessoa("Jamile", 30);

pessoa.falar("Olá, meu nome é {nome} e eu tenho {idade} anos.")
// console.log(pessoa);
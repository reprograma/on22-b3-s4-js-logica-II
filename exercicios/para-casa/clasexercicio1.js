// Exercicio 1 - Classes 

class Pessoa {
     pessoa1 = new Pessoa("Luana", 24);
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
//Classe

//Exercicio 1
class Pessoa {
    constructor (nome, idade){
      this.nome = nome
      this.idade = idade
    }
    falar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  
    }
  };
  
  let pessoa = new Pessoa("Leticia", 26);
  
  pessoa.falar();
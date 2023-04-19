// Exercicio 1 - Objeto 

let pessoa = {
    nome: "Luana",
    idade: 24,
    saudacao() {
      return `Olá, meu nome é ${this.nome}.`;
    }
  };


  console.log(pessoa.nome); // "Luana"
console.log(pessoa.idade); // 24
console.log(pessoa.saudacao()); // "Oi, meu nome é Luana."
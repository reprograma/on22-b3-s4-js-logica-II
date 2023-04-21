const pessoa = {
    nome: 'Uzumaki',
    idade: 33,
    saudacao: function() {
        console.log(`Olá, ${this.nome}, seja bem-vindo!`);
    }
}  

pessoa.saudacao();

const pessoa = {
    nome: "Dari",
    idade: 30,
    saudacao: function () {
        return `Olá ${this.nome}, seja bem vinda, linda`
    }
} 
const saudacao = pessoa.saudacao()
console.log(saudacao)
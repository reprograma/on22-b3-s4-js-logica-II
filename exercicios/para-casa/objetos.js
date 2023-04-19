// Execicios 01 ||

let pessoa = {
    nome: 'gracielle',
    idade: 22,
    imprima: function saudacao(){
        console.log(`olá ${this.nome}`)
    }
}

pessoa.imprima()
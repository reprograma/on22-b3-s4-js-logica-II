
const pessoa = {
    nome:"Rael",
    idade:"02",
    saudacao:function(){ 
        return "Olá ${this.nome}, Seja Bem-Vindo"
    } 
} 
 
const saudacao = pessoa.saudacao() 
 
console.log (saudacao)
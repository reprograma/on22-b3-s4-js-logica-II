let cachorro = {
    cor:"marrom",
    raca:"caramelo brazilis",
    idade:2,
    nome:"Brigadeiro",
    late:function(){
        console.log("Au au")
    }
}

const pessoa = {
    nome:"Manuelly",
    idade:30,
    cachorro,
    fale:function(mensagem){
        console.log(`${mensagem} ${this.nome}`)
    },
    ande: function(){
        console.log(`Essa pessoa de nome: ${this.nome} está andando`)
    }
}

const pessoa2 = {
    nome:"Andreza",
    idade:30,
    cachorro,
    fale:function(mensagem){
        console.log(`${mensagem} ${this.nome}`)
    },
    ande: function(){
        console.log(`Essa pessoa de nome: ${this.nome} está andando`)
    }
}

pessoa.fale("Olá")
pessoa.ande()
pessoa2.fale("E ai")
pessoa2.ande()
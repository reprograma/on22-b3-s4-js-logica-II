class Animal{
    constructor(nome){
        this.nome = nome;
    }
}

class Cachorro extends Animal{
    latir(mensagem){
        console.log(`${mensagem}`);
    }
}

const dog = new Cachorro();
dog.latir("Au au");
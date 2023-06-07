//criar o objeto pessoa e propriedades
const pessoa = {
    nome:"Lane",
    idade:46, 
    saudacao() {
        return 'Olá, meu nome é ${this.Lane}!';
    },
    };

    //imprima a saudação no console
    console.log(pessoa.saudacao());

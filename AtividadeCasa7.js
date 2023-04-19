class Calculadora{
    constructor(numero1, numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }
    soma() {
        console.log(`${this.numero1 + this.numero2}`)
    }
    subtrair() {
        console.log(`${this.numero1 - this.numero2}`)
    }
}

const calculadora = new Calculadora(1, 2);
calculadora.soma()
calculadora.subtrair()
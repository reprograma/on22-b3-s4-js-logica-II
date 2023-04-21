function parOuImpar(){
    let numero

    do{
        numero = parseInt(prompt("Imprima um número: "))
        if (numero%2==0){
            alert(`${numero} é par.`)
        }
        else if(numero%2!=0){
            alert(`${numero} é ímpar.`)
        }
        else{alert(`Valor inválido.`)}
    }while (numero!=0)
}

parOuImpar()
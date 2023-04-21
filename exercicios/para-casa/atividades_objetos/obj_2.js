let calculadora ={
    soma:(numero1,numero2)=>{
        let result = numero1+numero2
        return console.log(result) 
    },
    subtracao:(numero1,numero2)=>{
        let result = numero1-numero2
        return console.log(result)
    }
}

calculadora.soma(1,1)
calculadora.subtracao(2,2)
//Exercício 5:
let readline = require("readline-sync")
let n = 0
let resto = 0


    console.log("Verificar se o número é impar ou par");
n = parseInt (readline.question("Informe um número inteiro: "))
//Imprime "Verificar se o número é impar ou par"; "Informe um número inteiro: "
//Após o usuário colocar o número no terminal, exibe a mensagem se é ímpar ou par.
resto = n%2;

if (resto == 0 ) {
console.log('O número é Par')

} 
if (resto != 0){
    console.log('O número é Impar');
}
 

//Infelizmente ainda não consegui fazer acontecer dentro de um do...while, professora. Então vou entregar assim por conta do horário
 //mas estou aqui pesquisando nas documentações mais informações sobre o assunto.
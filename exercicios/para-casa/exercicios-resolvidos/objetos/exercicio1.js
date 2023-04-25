/* 
**Exercício 1:**

**Instruções:**
Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.

  _Teste a função saudacao() imprimindo a saudação no console._
*/

/*const pessoa = {
    nome: 'Ângela Oliveira',
    idade: 30,
    saudacao:(mensagem) => {  
        console.log(`Olá ${pessoa.nome}. Seja bem-vinda!`)

    }
}
console.log(pessoa.saudacao())
*/

const pessoa = {
        nome: 'Ângela Oliveira',
        idade: 25,
    saudacao() {
        return `Olá, ${pessoa.nome}. Seja bem vinda!`

    }
}
console.log(pessoa.saudacao())

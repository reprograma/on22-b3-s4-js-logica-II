/* Exercício 1:

    Crie uma classe chamada Pessoa.
    A classe deve ter duas propriedades: nome e idade.
    A classe deve ter um método chamado falar(), que imprime no console a 
    mensagem "Olá, meu nome é {nome} e eu tenho {idade} anos".

    Crie um objeto da classe Pessoa e chame o método falar.

    Dica : É importante lembrar de utilizar a palavra-chave class para criar 
    a classe, seguida pelo nome da classe com a primeira letra em maiúscula.

    Além disso, lembre-se de que a classe pode ter um método construtor, que é 
    chamado automaticamente quando uma instância da classe é criada. O construtor 
    pode receber parâmetros para inicializar as propriedades da classe.

    Outra dica é que você pode criar métodos dentro da classe utilizando a sintaxe 
    nomeDoMetodo() { // código aqui }. Esses métodos podem acessar as propriedades 
        da classe utilizando o this.nomeDaPropriedade.

    Por fim, lembre-se de que é possível criar uma instância da classe utilizando 
    a sintaxe: new NomeDaClasse(parametrosDoConstrutor).
*/

const Pessoa = class {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
    }
};

console.log(new Pessoa("Aline", 38).falar());

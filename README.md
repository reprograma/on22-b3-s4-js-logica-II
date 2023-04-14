<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 22 - B3 | Back-end | Semana 4 | 2023 | Professora Manuelly Suzik

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
- [Add outras intrucoes caso necessario]

### Resumo

O que veremos na aula de hoje?

- Estruturas de repetição
- Arrays
- Objetos
- Classes

## Conteúdo

- [Tema da Aula](#tema-da-aula)
  - [Instruções](#instruções)
  - [Resumo](#resumo)
  - [Conteúdo](#conteúdo)
  - [Estruturas de Repetição](#estruturas-de-repetição)
  - [Arrays](#arrays)
    - [Intro](#intro)
    - [Propriedade: length](#propriedade-length)
    - [Declaração](#declaração)
    - [Acessando itens](#acessando-itens)
    - [Estruturas de Repetição com Array](#estruturas-de-repetição-com-array)
    - [Métodos](#métodos)
  - [Objetos](#objetos)
    - [Notação Literal](#notação-literal)
    - [JSON e JSO](#json-e-jso)
    - [Manipulando Objetos](#manipulando-objetos)
    - [Métodos/Funções](#métodosfunções)
  - [Classes](#classes)
    - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Links Úteis](#links-úteis)

## Estruturas de Repetição

`while`: o comando while é uma estrutura de repetição que executa um bloco de código enquanto uma determinada condição for verdadeira.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

`do...while`: o comando do...while é uma estrutura de repetição que executa um bloco de código pelo menos uma vez, e depois repete o bloco enquanto uma determinada condição for verdadeira.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

`for`: o comando for é uma estrutura de repetição que permite executar um bloco de código várias vezes, com uma sintaxe mais compacta que o while. Ele possui três partes: a inicialização de uma variável, a condição de repetição e a atualização da variável.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

`for...in`: o comando for...in é uma estrutura de repetição que permite percorrer as propriedades de um objeto em JavaScript. Ele itera sobre as chaves (nomes das propriedades) do objeto.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

`for...of`: o comando for...of é uma estrutura de repetição introduzida no ECMAScript 6 que permite percorrer os valores de um objeto iterável, como um array.

```javascript
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}
```

`break`: o comando break é utilizado dentro de uma estrutura de repetição para interromper o loop e sair do bloco de código.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

`continue`: o comando continue é utilizado dentro de uma estrutura de repetição para pular uma iteração do loop e continuar para a próxima iteração.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```

## Arrays

### Intro

Um array é um objeto que armazena uma coleção de elementos, que podem ser de qualquer tipo de dado. Em JavaScript, os arrays são dinâmicos e podem crescer ou encolher automaticamente à medida que novos elementos são adicionados ou removidos.

### Propriedade: length

Assim como é possível ver acontecer com o tipo `string`, o Array também possui uma propriedade `.length` que nos informa o tamanho do array.

### Declaração

Para declarar um array em JavaScript, você pode usar a notação de colchetes ou o construtor de arrays.

```javascript
const array1 = [1, 2, 3];
const array2 = new Array(4, 5, 6);
```

### Acessando itens

Os elementos de um array podem ser acessados usando sua posição no array, que começa em 0.

```javascript
const array = [1, 2, 3];
console.log(array[0]); // Output: 1
console.log(array[1]); // Output: 2
console.log(array[2]); // Output: 3
```

### Estruturas de Repetição com Array

Os loops `for`, `while`, `for...of` e `forEach` podem ser usados para iterar sobre os elementos de um array.

veja alguns exemplos:

```javascript
const array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let i = 0;

while (i < array.length) {
  console.log(array[i]);
  i++;
}

for (const element of array) {
  console.log(element);
}

array.forEach((element) => {
  console.log(element);
});
```

### Métodos

Aqui estão alguns dos métodos mais comuns que podem ser usados com arrays:
Pop

O método pop remove o último elemento de um array e retorna esse elemento.

```javascript
const array = [1, 2, 3];
const removedElement = array.pop(); // removedElement = 3, array = [1, 2]
```

push()

O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

```javascript
const array = [1, 2];
const newLength = array.push(3, 4); // newLength = 4, array = [1, 2, 3, 4]
```

shift()

O método shift remove o primeiro elemento de um array e retorna esse elemento.

```javascript
const array = [1, 2, 3];
const removedElement = array.shift(); // removedElement = 1, array = [2, 3]
```

unshift()

O método unshift adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

```javascript
const array = [1, 2];
const newLength = array.unshift(3, 4); // newLength = 4, array = [3, 4, 1, 2]
```

forEach()

O método forEach executa uma função para cada elemento de um array.

```javascript
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
```

sort()

O método sort() ordena os itens do array em ordem alfabética ou numérica:

```javascript
let arr = ['d', 'b', 'a', 'c'];
arr.sort();
console.log(arr); // ['a', 'b', 'c', 'd']
```

slice()

O método slice() retorna uma cópia de uma parte do array:

```javascript
let arr = ['a', 'b', 'c', 'd'];
let sliced = arr.slice(1, 3);
console.log(sliced);
```

filter()

Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(filteredNumbers); // [2, 4]
```

find()

Retorna o valor do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna undefined. Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find((number) => {
  return number > 3;
});

console.log(foundNumber); // 4
```

map()

Cria um novo array com os resultados da chamada de uma função para cada elemento do array. Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5];

const mappedNumbers = numbers.map((number) => {
return number \* 2;
});

console.log(mappedNumbers); // [2, 4, 6, 8, 10]

```

## Objetos

Em JavaScript, um objeto é uma estrutura de dados que contém propriedades e métodos relacionados.

### Notação Literal

A notação literal é uma forma de criar um objeto usando chaves {} e atribuindo valores às suas propriedades usando a sintaxe `{chave: valor}`.

### JSON e JSO

JSO (JavaScript Object) e JSON (JavaScript Object Notation) são termos que se referem a conceitos diferentes em JavaScript.

JSO é um objeto criado em JavaScript usando a sintaxe de objetos literais ou construtores de objeto. Esses objetos são utilizados para armazenar informações e organizar dados em uma estrutura de dados conveniente para a manipulação de dados dentro do próprio código JavaScript.

Por outro lado, JSON é uma notação de objeto leve, independente de linguagem, que é usada para transmitir e armazenar dados estruturados. JSON é uma forma popular de enviar e receber dados entre aplicativos, particularmente em aplicativos da web. Ele é baseado na sintaxe de objeto JavaScript, mas é uma representação de texto, ao invés de um objeto real.

**TL;DR**

Embora as duas tecnologias sejam baseadas em objetos JavaScript, JSO é usado para armazenar dados no código e JSON é usado para transmitir dados entre diferentes sistemas ou aplicativos. Além disso, JSON é uma representação textual dos objetos JavaScript e pode ser usado em muitas linguagens de programação, enquanto JSO é uma construção específica do JavaScript.

### Manipulando Objetos

Manipular um objeto em JavaScript envolve acessar e alterar suas propriedades e métodos. Existem várias maneiras de fazer isso, incluindo:

Acessando as propriedades do objeto:

- Usando a notação de ponto: objeto.propriedade
- Usando a notação de colchetes: objeto["propriedade"]

Por exemplo:

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Programador',
};

console.log(pessoa.nome); // "João"
console.log(pessoa['idade']); // 30
```

Alterando as propriedades do objeto:

```javascript
pessoa.nome = 'Maria';
pessoa['idade'] = 31;
console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador" }
```

Atribuindo um valor a uma nova chave

Por exemplo:

```javascript
pessoa.cidade = 'São Paulo';
console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador", cidade: "São Paulo" }
```

Excluindo propriedades do objeto: Usando o operador delete

Por exemplo:

```javascript
delete pessoa.cidade;
console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador" }
```

### Métodos/Funções

Os objetos Javascript também podem possuir métodos, que são funções armazenadas nas propriedades do objeto.

Por exemplo:

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Programador',
  saudar: function () {
    console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
  },
};

pessoa.saudar(); // "Olá, meu nome é João e eu sou um Programador."
```

## Classes

Para criar uma classe em JavaScript, você usa a palavra-chave class, seguida pelo nome da classe e um conjunto de chaves que contêm a definição da classe. Por exemplo:

```javascript
class Animal {
  constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
  }

  andar() {
    console.log(`${this.nome} está andando.`);
  }
}
```

Nesse exemplo, a classe **Animal** é definida com um construtor que define as propriedades nome e espécie do animal. Além disso, ela tem um método `andar()` que exibe uma mensagem na saída.

Para criar um objeto a partir de uma classe, você pode usar a palavra-chave `new`, seguida pelo nome da classe e quaisquer argumentos que o construtor possa exigir. Por exemplo:

```javascript
const cachorro = new Animal('Fido', 'cachorro');
console.log(cachorro.nome); // "Fido"
console.log(cachorro.especie); // "cachorro"
cachorro.andar(); // "Fido está andando."
```

Classes também podem ser estendidas, permitindo que você crie sub-classes que herdam propriedades e métodos da classe pai. Por exemplo:

```javascript
class Cachorro extends Animal {
  constructor(nome) {
    super(nome, 'cachorro');
  }

  latir() {
    console.log(`${this.nome} está latindo.`);
  }
}

const rex = new Cachorro('Rex');
console.log(rex.especie); // "cachorro"
rex.andar(); // "Rex está andando."
rex.latir(); // "Rex está latindo."
```

Nesse exemplo, a classe **Cachorro** é definida como uma subclasse de Animal, com o método adicional `latir()`. Ao criar um objeto Cachorro, ele herda as propriedades e métodos de Animal, mas também possui seu próprio método adicional.

As classes em JavaScript oferecem uma maneira clara e concisa de criar objetos com comportamentos semelhantes e permitem que você crie hierarquias de classes com facilidade

### Exercícios

- [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
- [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)

### Material da aula

### Links Úteis

<p align="center">
Desenvolvido com :purple_heart:  
</p>

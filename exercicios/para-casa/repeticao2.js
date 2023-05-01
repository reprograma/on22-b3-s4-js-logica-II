// Exercicio 02 || foi o mais ok

let animal = {
  nome: "olly",
  cor: "rajadinho",
  nome_dona: "graci",
};

for (let dados in animal) {
  console.log(`${dados}: ${animal[dados]}`);
}

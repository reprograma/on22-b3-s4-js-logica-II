const animal = {
    nome: 'kurama',
    cor: 'laranja',
    idade: 2,
    nome_dono: 'uzumaki'
};

for (let propriedade in animal) {
    console.log(`${propriedade}: ${animal[propriedade]}`);

}
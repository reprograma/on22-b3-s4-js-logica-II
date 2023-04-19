const animal = {
    nome: 'Pablo',
    idade: 1,
    nome_dono: 'AAA'
};

for (let key in animal) {
    console.log(`${key}: ${animal[key]}` );
}
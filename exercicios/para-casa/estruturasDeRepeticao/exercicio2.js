const animal = {
    nome: "Lex",
    cor: "Preto",
    // cor: 5
    // idade: 5
    nome_do_dono: "Jamile"
}

for( let key in animal){
    console.log(`${key}: ${animal[key]}`);
}
const animal = {
    nome: "Alfafa",
    cor: "Verde-Alface",
    nome_tutore: "Louise Honey" //mudei o termo dono para tutore pois achei mais adequado
}

for (caracteristicas in animal) {
    console.log(`${caracteristicas}: ${animal[caracteristicas]}.`);
}
// cria um objeto animal com as propriedades nome, cor e nome_dono
const animal = {
    nome:"Rex",
    cor:"branca",
    dona:"Lane",
}; 
// percorre o objeto animal e imprime cada propriedade e valor no console
for (let propriedade in animal) {
    
    console.log(propriedade + ": " + animal[propriedade]);
}

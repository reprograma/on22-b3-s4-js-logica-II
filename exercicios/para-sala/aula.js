const pessoa ={
    name: "Cybelle",
    age: 27,
    city: "BH"
};

for(let propriedade in pessoa){
  console.log(`${propriedade}: ${pessoa[propriedade]}`)
}

//
//

let animal = {nome:"Raposa", cor:"laranja", nome_dono:"Erika"}

for (let property in animal) {
    console.log(`${property}: ${animal[property]}`)
}
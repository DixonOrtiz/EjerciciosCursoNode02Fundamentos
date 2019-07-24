/*Forma para incluir variables dentro de strings con las comillas invertidas */
let superHeroe = "Spider-Man";
let nombreReal = "Peter Parker";

function getNombre(){
    return `${superHeroe} es ${nombreReal}`;
}

console.log(getNombre());
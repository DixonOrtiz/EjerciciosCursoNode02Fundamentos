//Formato e implementación de funciones de flecha

let saludar = (nombre) => `!Hola ${nombre}!`;
let sumarDosNumeros = (numero1, numero2) => numero1 + numero2;
let concatenaPalabras = (palabra1, palabra2, palabra3) => palabra1 + " " + palabra2 + " " + palabra3;

console.log(saludar("Dixon"));
console.log(sumarDosNumeros(15,20));
console.log("Hola", "amigo", "Dixon");

//Se aplican las funciones flecha utilizando una función de callback
let saludarConCallback = (nombre, callback) => {
    if(!(nombre == "Dixon")){
        callback(`No se puede saludar al nombre: ${nombre}`);
    }

    else{
        callback(null, nombre);
    }
}

saludarConCallback("Felipe", (err, nombre) => {
    if(err){
        return console.log(err);
    }    

    else{
        console.log(`!Hola ${nombre}!`);
    }
});
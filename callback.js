/*Ejercicio de sintaxis de los callbacks*/

/*Se inicia la declaración de la función 'getUsuarioById', ésta se implementa como una función
de flecha y recibe dos parámetros, un id entero y una función de callback llamada igual*/
let getUsuarioById = (id, callback) => {
    
    //Forma estándar de declarar un objeto en JavaScript
    let usuario = {
        nombre: "Dixon",
        id //Como el parámetro de la función se llama igual que el atributo se permite esta sintaxis.
    }

    if(id == 20){
        callback(`El usuario ${id} no existe en los registros`, null);
    }

    else{
        callback(null, usuario);
    }
}

getUsuarioById(15, (err, usuario) => {
    if(err){
        return console.log(err);
    }

    console.log("Usuario: ", usuario);
})
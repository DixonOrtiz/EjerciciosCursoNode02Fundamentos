//Se inicia la declaración de la función 'getUsuarioById', ésta se implementa como una función
//de flecha y recibe dos parámetros, un id entero y una función de callback llamada igual
let getUsuarioById = (id, callback) => {
    //Forma estándar de declarar un objeto en JavaScript
    let usuario = {
        nombre: "Dixon",
        id //Como el parámetro de la función se llama igual que el atributo se permite esta sintaxis.
    }

    //En caso de que el id sea 20 se llama a la función callback con el argumento puesto
    if(id == 20){
        //El primer parámetro es el string y el segundo es undefined
        callback(`El usuario ${id} no existe en la base de datos`);
    }
    //En caso de que el id no sea 20 se llama a la función callback con el primer parámetro null
    //indicando que no hay un error y en el segundo parámetro se pasa el objeto usuario
    else{
        callback(null, usuario);
    }
}

getUsuarioById(15, (err, usuario) => {
    if(err){
        return console.log(err);
    }

    console.log("Usuario de base de datos: ", usuario);
})
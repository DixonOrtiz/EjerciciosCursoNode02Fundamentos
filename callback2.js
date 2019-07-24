//Se declara un arreglo de objetos llamado empleados
let empleados = [
    {id: 1, nombre: "Fernando"},
    {id: 2, nombre: "Felipe"},
    {id: 3, nombre: "Dixon"}
];

//Se declara una arreglo de objetos llamado salarios
let salarios = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000},
];

/*Se implementa la función getEmpleado con el formato de función flecha, busca un empleado 
con id asociado en el array empleados y lo resuelve, en caso contrario lanza un error.*/
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    
    if(!empleadoDB){
        callback("El empleado no se encuentra en los registros.", null);
    }

    else{
        callback(null, empleadoDB);
    }
}

/*Se implementa la función getSalario con el formato de función flecha, a través de la entrada
de un empleado busca un salario asociado a su id y devuelve un objeto con el nombre y el salario
de dicho empleado, en caso contrario lanza un error.*/
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No existe salario para el empleado ${empleado.nombre}`, null);
    }

    else{
        let empleadoConSalario = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }

        callback(null, empleadoConSalario);
    }
}

/*Se imprime el resultado en caso de éxito, en caso contraroio se manejan los errores*/
getEmpleado(1, (err, empleado) => {
    if(err){
        console.log(err);
    }
    else{
        getSalario(empleado, (err, empleadoConSalario) => {
            if(err){
                console.log(err);
            }           

            else{
                console.log(`El salario de ${empleadoConSalario.nombre} es de $${empleadoConSalario.salario}`);
            }
        });
    }
});
//Se crea el array de objetos "empleados"
let empleados = [
    {id: 1, nombre: "Dixon"},
    {id: 2, nombre: "Felipe"},
    {id: 3, nombre: "Manuel"}
];

//Se crea el array de objetos "salarios"
let salarios = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000}
];

/*Se implementa la función getEmpleado con el formato de función flecha, busca un empleado 
con id asociado en el array empleados y lo resuelve, en caso contrario lanza un error.*/
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if(!empleadoDB){
            reject(`No existe un empleado con el id: ${id}`);
        }

        else{
            resolve(empleadoDB);
        }
    });
}

/*Se implementa la función getSalario con el formato de función flecha, a través de la entrada
de un empleado busca un salario asociado a su id y devuelve un objeto con el nombre y el salario
de dicho empleado, en caso contrario lanza un error.*/
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No existe un salario para el empleado: ${empleado.id}`);
        }

        else{
            let empleadoConSalario = {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            }
            
            resolve(empleadoConSalario);
        }
    });
}

/*Se implementa la función getInformación, recibe un id y en caso de éxito deuelve un mensaje
con el nombre del empleado y su salario*/
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let empleadoConSalario = await getSalario(empleado);

    return `${empleadoConSalario.nombre} tiene un salario de ${empleadoConSalario.salario}$`;
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));


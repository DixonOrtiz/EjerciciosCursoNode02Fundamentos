let empleados = [
    {id: 1, nombre: "Dixon"},
    {id: 2, nombre: "Felipe"},
    {id: 3, nombre: "Manuel"}
];

let salarios = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000}
];

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

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let empleadoConSalario = await getSalario(empleado);

    return `${empleadoConSalario.nombre} tiene un salario de ${empleadoConSalario.salario}$`;
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));


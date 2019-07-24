/*Ejercicio de promesas encadenadas*/

//Se crea el array de objetos empleados
let empleados = [
    {id: 1, nombre: "Dixon"},
    {id: 2, nombre: "Felipe"},
    {id: 3, nombre: "Manuel"}
];

//Se crea el array de objetos salarios
let salarios = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000}
];

/*Se implementan las funciones utilizando promesas en luegar de un callbacks. */
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

//Se encadenan las promesas con el uso de la función then y se capturar los errores con un catch
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
})
.then(empleadoConSalario => {
    console.log(`El empleado ${empleadoConSalario.nombre} tiene un salario de ${empleadoConSalario.salario}$`);
})
.catch(err => {
    console.log(err);
});
//Se crear el objeto deadpool
let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración", 

    getDatos: function(){
        return `${this.nombre} ${this.apellido} posee ${this.poder}`;
    }
};

/*Esta es una forma de obtener los valores de un objeto en variables a través de una asignación 
sencilla. Lo que ocurre en "nombre: nombreDeadpool" es que se le dice al intérprete que obtenga
 el valor del campo "nombre" y lo almacene en "nombreDeadpool". En los demás casos las variables
 quedan identificadas con el mismo nombre del campo.
*/
let {nombre: nombreDeadpool, apellido, poder} = deadpool;

console.log(nombreDeadpool, apellido, poder);
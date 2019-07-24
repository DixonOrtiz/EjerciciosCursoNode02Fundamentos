//Se crear el objeto deadpool
let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración", 

    getDatos: function(){
        return `${this.nombre} ${this.apellido} posee ${this.poder}`;
    }
};

//Se modifica el nombre del campo "nombre" a "nombreDeadpool"
let {nombre: nombreDeadpool, apellido, poder} = deadpool;

console.log(nombreDeadpool, apellido, poder);

console.log(deadpool.getDatos());   
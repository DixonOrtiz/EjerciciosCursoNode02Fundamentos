let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración", 

    getDatos: function(){
        return `${this.nombre} ${this.apellido} posee ${this.poder}`;
    }
};

//Este código funciona

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let {nombre: nombreDeadpool, apellido, poder} = deadpool;

console.log(nombreDeadpool, apellido, poder);

/*Ejercicio de callbacks*/

//Se crea el array de objetos profesores
let profesores = [
    {id: 1, nombre: "Luis"},
    {id: 2, nombre: "Sebastián"},
    {id: 3, nombre: "Víctor"},
    {id: 4, nombre: "Carlos"}
];

//Se crea el array de obejtos materias
let materias = [
    {id: 1, materia: "Teoría de Sistemas"},
    {id: 2, materia: "Computación Paralela"},
    {id: 2, materia: "Comunicación de Datos"},
    {id: 3, materia: "Ingeniería de Software"},
    {id: 3, materia: "Trabajo de Título"}
];

//Encuentra un profesor del registro según id
let getProfesor = (id, callback) => {
    let profesorSegunId = profesores.find(profesor => profesor.id === id);
    
    if(!profesorSegunId){
        callback(`No existe un profesor con el id ${id}`, null);
    }
    else{
        callback(null, profesorSegunId);
    }
}

//Encuentra una materia/s del registro según id de profesor recibido
let getMaterias = (profesor, callback) => {
    let materiasSegunId = materias.filter(materia => materia.id === profesor.id);
    
    if(!(materiasSegunId.length > 0)){
        callback(`El profesor con id ${profesor.id} no posee materias asignadas.`, null);
    }
    else{
        callback(null, materiasSegunId);
    }

}

//Obtiene solo los nombres de las materias de un objeto y las devuelve como un array
let retornarArrayMaterias = (materiasParametro) => {
    let materias = [];

    materiasParametro.forEach(materia => {
        materias.push(materia.materia);                                
    });

    return materias;
}

/*Se devuelve el nombre y las materias del profesor en caso de éxito, en caso contrario se 
manejan los errores. (Esta forma de trabajar es poco clara y difícil de mantener, se ha realizado
únicamente con fines de aprendizaje)*/
getProfesor(2, (err, profesorSegunId) => {
    if(err){
        console.log(err);
    }
    else{
        getMaterias(profesorSegunId, (err, materiasSegunId) => {
            if(err){
                console.log(err);
            }
            else{
                let materias = retornarArrayMaterias(materiasSegunId);              

                let profesorConMaterias = {
                    nombre: profesorSegunId.nombre,
                    materias: materias
                }

                if((profesorConMaterias.materias.length) == 1){
                    console.log(`El profesor ${profesorConMaterias.nombre} imparte la materia de ${profesorConMaterias.materias[0]}.`);
                }

                else{
                    console.log(`El profesor ${profesorConMaterias.nombre} imparte las siguiente materias:`);
                    profesorConMaterias.materias.forEach(materia => {
                        console.log(`\t-${materia}`);
                    })
                }
            }
        });
    }
});


